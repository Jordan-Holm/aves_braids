class Api::ServicesController < ApplicationController

  before_action :set_service, only: [:show, :update, :destroy]

  def index
    render json: Service.all
  end

  def show
    render json: @service
  end

  def create
    @service = Service.new(service_params)
    if @service.save
      render json: @service
    else
      render json: { errors: @service.errors.full_messages }, status: 422
    end

  end

  def update
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
      params.require(:service).permit( :service_type, :service_estimate, :approx_time, :service_img, :description, :file )
    end
end