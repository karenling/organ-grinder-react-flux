class Api::TracksController < ApplicationController
  def create
    track = Track.new(track_params)
    if track.save
      render json: track, status: :ok
    else
      render json: track.errors.full_messages, status: :unprocessable_entity
    end
  end

  def index
    render json: Track.all
  end

  def destroy
    track = Track.find_by_id(params[:id])
    if track
      render json: track, status: :ok
    else
      render json: track, status: :unprocessable_entity
    end
  end

  private

  def track_params
    params.require(:track).permit(:name, {roll: [:timeSlice, note: [] ]})
  end
end
