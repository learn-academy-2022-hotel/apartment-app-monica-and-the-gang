require "rails_helper"

RSpec.describe Apartment, type: :request do
    describe "GET /index" do
        it "gets all the apartments" do
            user = User.where(
            email: "test@example.com").first_or_create(password: "password", password_confirmation: "password")
            user.apartments.create(
                street: "4 Privet Drive",
                city: "Little Whinging",
                state: "Surrey",
                manager: "Mr. Potter",
                email: "potter@example.com",
                price: "2000",
                bedrooms: 3,
                bathrooms: 2,
                pets: "yes",
                image: "https://c8.alamy.com/comp/B0RJGE/small-bungalow-home-with-pathway-in-addlestone-surrey-uk-B0RJGE.jpg",
                user_id: 1
                )
            get '/apartments'
            apartment = JSON.parse(response.body)
            expect(response).to have_http_status(200)
            expect(apartment.length).to eq(1)
        end
    end
    describe "POST /create" do
        it "creates a apartment" do
            User.create(
                email: "test@example.com",
                password: "password",
                password_confirmation: "password"
                ) 
                user = User.first
                apartment_params = {
                    apartment: {
                        street: "4 Privet Drive",
                        city: "Little Whinging",
                        state: "Surrey",
                        manager: "Mr. Potter",
                        email: "potter@example.com",
                        price: "2000",
                        bedrooms: 3,
                        bathrooms: 2,
                        pets: "yes",
                        image: "https://c8.alamy.com/comp/B0RJGE/small-bungalow-home-with-pathway-in-addlestone-surrey-uk-B0RJGE.jpg",
                        user_id:user.id
                    }
                }
                post '/apartments', params: apartment_params
                expect(response).to have_http_status(200)
                apartment=Apartment.first
                expect(apartment.street).to eq "4 Privet Drive"
                expect(Apartment.count).to eq 1
        end
    end
end
