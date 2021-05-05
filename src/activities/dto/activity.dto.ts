
export class ActivityDTO{

    readonly title: string;

    readonly price: number;

    readonly img: string[];

    readonly destination: string[];

    readonly type: string[];

    readonly sumary: string;

    readonly duration: string;

    readonly cancelation: string;
    
    readonly instant_confirmation: boolean;

    readonly mobile_ticket: boolean;

    readonly pet_friendly: boolean;
    
    readonly experience_details: string;
    
    readonly includes: string[];
    
    readonly location: string[]; 

    readonly reviews: object;

    readonly children: boolean;
}