require "rails_helper"

RSpec.describe Apartment, type: :model do
    it "is not valid without a street" do
        apartment = Apartment.create city:"folsom", state:"ca", manager:"jeff", email:"email@email", price:"2222", bedrooms:2, bathrooms:2, pets:"yes", image:"place url here", user_id:1
        
        expect(apartment.errors[:street]).to_not be_empty     
    end
    it "is not valid without a city" do
        apartment = Apartment.create street:"hancock", state:"ca", manager:"jeff", email:"email@email", price:"2222", bedrooms:2, bathrooms:2, pets:"yes", image:"place url here", user_id:1

        expect(apartment.errors[:city]).to_not be_empty  
    end
    it "is not valid without a state" do
        apartment = Apartment.create street:"hancock", city:"folsom", manager:"jeff", email:"email@email", price:"2222", bedrooms:2, bathrooms:2, pets:"yes", image:"place url here", user_id:1


        expect(apartment.errors[:state]).to_not be_empty 
    end
    it "is not valid without a manager" do
        apartment = Apartment.create street:"hancock", city:"folsom", state: "ca", email:"email@email", price:"2222", bedrooms:2, bathrooms:2, pets:"yes", image:"place url here", user_id:1


        expect(apartment.errors[:manager]).to_not be_empty 
    end
    it "is not valid without a email" do
        apartment = Apartment.create street:"hancock", city:"folsom", state: "ca", manager:"jeff", price:"2222", bedrooms:2, bathrooms:2, pets:"yes", image:"place url here", user_id:1


        expect(apartment.errors[:email]).to_not be_empty 
    end
    it "is not valid without a price" do
        apartment = Apartment.create street:"hancock", city:"folsom", state: "ca",  manager:"jeff", email:"email@email", bedrooms:2, bathrooms:2, pets:"yes", image:"place url here", user_id:1


        expect(apartment.errors[:price]).to_not be_empty 
    end
    it "is not valid without a bedroooms" do
        apartment = Apartment.create street:"hancock", city:"folsom", state: "ca",manager:"jeff", email:"email@email", price:"2222",  bathrooms:2, pets:"yes", image:"place url here", user_id:1


        expect(apartment.errors[:bedrooms]).to_not be_empty 
    end
    it "is not valid without a bathrooms" do
        apartment = Apartment.create street:"hancock", city:"folsom", state: "ca", manager:"jeff", email:"email@email", price:"2222", bedrooms:2, pets:"yes", image:"place url here", user_id:1


        expect(apartment.errors[:bathrooms]).to_not be_empty 
    end
    it "is not valid without a pets" do
        apartment = Apartment.create street:"hancock", city:"folsom", state: "ca", manager:"jeff", email:"email@email", price:"2222", bedrooms:2, bathrooms:2, image:"place url here", user_id:1


        expect(apartment.errors[:pets]).to_not be_empty 
    end
    it "is not valid without a image" do
        apartment = Apartment.create street:"hancock", city:"folsom", state: "ca", manager:"jeff", email:"email@email", price:"2222", bedrooms:2, bathrooms:2, pets:"yes", user_id:1


        expect(apartment.errors[:image]).to_not be_empty 
    end
    it "is not valid without a user_id" do
        apartment = Apartment.create street:"hancock", city:"folsom", state: "ca", manager:"jeff", email:"email@email", price:"2222", bedrooms:2, bathrooms:2, pets:"yes", image:"place url here"


        expect(apartment.errors[:user_id]).to_not be_empty 
    end
end 
