import { Injectable } from "@angular/core";
import { HousingLocation } from "./housinglocation";

@Injectable({
    providedIn: "root",
})
export class HousingService {
    url = "http://localhost:3000/locations";

    async getAllHousingLocations(): Promise<HousingLocation[]> {
        try {
            const data = await fetch(this.url);
            return (await data.json()) ?? [];
        } catch (error) {
            console.error("Error fetching housing locations", error);
            return [];
        }
    }

    async getHousingLocationById(
        id: number
    ): Promise<HousingLocation | undefined> {
        try {
            const data = await fetch(`${this.url}/${id}`);
            if (!data.ok) {
                console.error(`Error fetching housing location with id ${id}`);
                return undefined;
            }
            return await data.json();
        } catch (error) {
            console.error(
                `Error fetching housing location with id ${id}`,
                error
            );
            return undefined;
        }
    }

    submitApplication(firstName: string, lastName: string, email: string) {
        console.log(firstName, lastName, email);
    }
}
