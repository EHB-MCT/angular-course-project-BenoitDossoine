export interface IGameDetails{
    games: {

    type: string,
    name: string,
    steam_appid: number,
    required_age: string,
    is_free: boolean,
    controller_support: string,
    detailed_description: string,
    about_the_game: string,
    short_description: string,
    supported_languages: string,
    header_image:string,
    website?: string,
    pc_requirements: {
        minimum: string,
        recommended: string,
    },
    mac_requirements:{
        minimum: string,
        recommended: string,
    },
    linux_requirements:{
        minimum: string,
        recommended: string,
    },
    legal_notice: string,
    developers: Array<string>,
    publishers: Array<string>,
    price_overview: {
        "currency": string,
        "initial": number,
        "final": number,
        "discount_percent": number,
        "initial_formatted": string,
        "final_formatted": string 
    },
    packages: Array<number>,
    package_groups: {
        name: string,
        title: string,
        description: string,
        selection_text: string,
        save_text: string,
        display_type: number,
        is_recurring_subscription: string,
        subs: {
            packageid: number,
            percent_savings_text: string,
            percent_savings: number,
            option_text: string,
            option_description: string,
            can_get_free_license: string,
            is_free_license: boolean,
            price_in_cents_with_discount: number
        }[]
    }[],
    platforms:{
        windows: boolean,
        mac: boolean,
        linux: boolean,
    },
    metacritic:{
        score: number,
        url: string
    },
    categories: {
        id:number,
        description: string
    }[],
    genres:  {
        id:number,
        description: string
    }[],
    screenshots: {
        id: number,
        path_thumbnail: string,
        path_full: string,
    }[],
    movies: {
        id: number,
        name: string,
        thumbnail: string,
        webm?: {
          "480": string,
          max: string
        },
        mp4?: {
            "480": string,
            max: string
        },
        highlight: boolean 
    }[],
    recommendations:{
        total: number,
    },
    achievements:{
        total: 42,
        highlighted: {
            name:string,
            path: String,
        }[]
    },
    release_date: {
        coming_soon: boolean,
        date?: string,
    },
    support_info: {
        url: string,
        email?: string
    },
    background: string,
    background_raw: string,
    content_descriptors: {
        ids?: Array<number>,
        notes?: null,
    }
}[]

}