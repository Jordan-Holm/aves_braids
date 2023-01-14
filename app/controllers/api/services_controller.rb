class Api::ServicesController < ApplicationController

  before_action :set_service, only: [:show, :update, :destroy]

  def index
    render json: Service.all
  end

  def show
    render json: @service
  end

  def create
    @service = Service.new()
    @service.service_type = params[:service_type]
    @service.service_estimate = params[:service_estimate]
    @service.approx_time = params[:approx_time]
    @service.service_img = params[:service_img]
    @service.description = params[:description]

    file = params[:file]

    if file && file != '' && file != "undefined"
      begin
        ext = File.extname(file.tempfile)
        cloud_image = Cloudinary::Uploader.upload(file, public_id: file.original_filename, secure: true)
        @house.img = cloud_image['secure_url']
        if @service.save
          render json: @service
        else 
          render json: { errors: @service.errors.full_messages }, status: 422
        end
      rescue => exception
        render json: { errors: e }, status: 422
      end
    else
      if @service.save
        render json: @service
      else
        render json: { errors: @service.errors.full_messages }, status: 422
      end
    end

  end

  def update
    @service.service_type = params[:service_type] ? params[:service_type] : @service.service_type
    @service.service_estimate = params[:service_estimate] ? params[:service_estimate] : service.service_estimate
    @service.approx_time = params[:approx_time] ? params[:approx_time] : @service.approx_time
    @service.service_img = params[:service_img] ? params[:service_img] : @service.service_img
    @service.description = params[:description] ? params[:description] : @service.description

    file = params[:file]

    if file && file != '' && file != "undefined"
      begin
        ext = File.extname(file.tempfile)
        cloud_image = Cloudinary::Uploader.upload(file, public_id: file.original_filename, secure: true)
        @house.img = cloud_image['secure_url']
        if @service.update(service_params)
          render json: @service
        else
          render json: { errors: @service.errors }, status: :unprocessable_entity
        end
      rescue => e
        render json: { errors: e }, status: 422
      end
    else
      if @service.save
        render json: @service
      else
        render json: { errors: @service.errors.full_messages }, status: 422
      end
    end

    if @service.update(service_params)
      render json: @service
    else
      render json: { errors: @service.errors }, status: :unprocessable_entity
    end
  end

  def destroy
    @service.destroy
    render json: { message: 'service deleted' }
  end

  private
    def set_service
      @service = Service.find(params[:id])
    end

    def service_params
      params.require(:service).permit( :service_type, :service_estimate, :approx_time, :service_img, :description )
    end
end