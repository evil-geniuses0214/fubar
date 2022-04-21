class ProfilesController < ApplicationController
    def index
        profiles = Profile.all
        render json: profiles
    end

    def destroy
        profile = Profile.find(params[:id])
        if profile.destroy
            render json: profile
        else
            render json: profile.errors
        end
    end

    def create
        if user_signed_in?
            profile = current_user.create_profile(profile_params)
            if profile.valid?
                render json: profile, status: :created
            else
                render json: profile.errors, status: 400
            end
        else
            render json: {}, status: 401
        end
    end

    def update
        profile = Profile.find(params[:id])
        profile.update(profile_params)
        if profile.valid?
            render json: profile
        else
            render json: profile.errors, status: 422
        end
    end

    private 
    def profile_params
        params.require(:profile).permit(:name, :picture, :branch_of_service, :military_status, :city, :state, :favorite_beer, :duty_station, :about_me)
    end 
end
