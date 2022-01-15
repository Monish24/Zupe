import { mutation, action } from 'vuex-class-component'
import { VuexModule } from './module';

export class DemoStore extends VuexModule.With({ namespaced: 'demo' }) {

    private firstname = "Michael";
    private lastname = "Olofinjana";
    specialty = "JavaScript";

    @mutation clearName(): void {
        this.firstname = "";
        this.lastname = "";
    }

    @action async doSomethingAsync(): Promise<number> { return 20 }

    get fullname(): string {
        return this.firstname + " " + this.lastname;
    }

    set fullname(name: string) {
        const names = name.split(" ");
        this.firstname = names[0];
        this.lastname = names[1];
    }

    get bio(): string {
        return `Name: ${this.fullname} Specialty: ${this.specialty}`;
    }
}