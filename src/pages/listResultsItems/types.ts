export interface SearchResult {
    site_id: string;
    country_default_time_zone: string;
    query: string;
    paging: Paging;
    results: Result[];
}

export interface SearchData {
    author: {
        name: string;
        lastname: string;
    };
    categories: string[];
    items: Item[];
}


export interface Item {
    id: string;
    title: string;
    price: {
        currency: string;
        amount: number;
        decimals: number;
    };
    picture: string;
    condition: string;
    address: string;
    free_shipping: boolean;
}

interface Paging {
    total: number;
    primary_results: number;
    offset: number;
    limit: number;
}

interface Eshop {
    seller: number;
    eshop_rubro?: any;
    eshop_id: number;
    nick_name: string;
    site_id: string;
    eshop_logo_url: string;
    eshop_status_id: number;
    eshop_experience: number;
    eshop_locations: any[];
}

interface Cancellations {
    period: string;
    rate: number;
    value: number;
}

interface Claims {
    period: string;
    rate: number;
    value: number;
}

interface DelayedHandlingTime {
    period: string;
    rate: number;
    value: number;
}

interface Sales {
    period: string;
    completed: number;
}

interface Metrics {
    cancellations: Cancellations;
    claims: Claims;
    delayed_handling_time: DelayedHandlingTime;
    sales: Sales;
}

interface Ratings {
    negative: number;
    neutral: number;
    positive: number;
}

interface Transactions {
    canceled: number;
    period: string;
    total: number;
    ratings: Ratings;
    completed: number;
}

interface SellerReputation {
    power_seller_status: string;
    level_id: string;
    metrics: Metrics;
    transactions: Transactions;
}

interface Seller {
    id: number;
    permalink: string;
    registration_date: Date;
    car_dealer: boolean;
    real_estate_agency: boolean;
    tags: string[];
    eshop: Eshop;
    seller_reputation: SellerReputation;
}

interface Conditions {
    context_restrictions: string[];
    start_time?: Date;
    end_time?: Date;
    eligible: boolean;
}

interface Metadata {
    campaign_id: string;
    promotion_id: string;
    promotion_type: string;
}

interface Price {
    id: string;
    type: string;
    amount: number;
    regular_amount?: number;
    currency_id: string;
    last_updated: Date;
    conditions: Conditions;
    exchange_rate_context: string;
    metadata: Metadata;
}

interface Presentation {
    display_currency: string;
}

interface Conditions2 {
    context_restrictions: string[];
    start_time?: any;
    end_time?: any;
    eligible: boolean;
}

interface ReferencePrice {
    id: string;
    type: string;
    conditions: Conditions2;
    amount: number;
    currency_id: string;
    exchange_rate_context: string;
    tags: any[];
    last_updated: Date;
}

interface Prices {
    id: string;
    prices: Price[];
    presentation: Presentation;
    payment_method_prices: any[];
    reference_prices: ReferencePrice[];
    purchase_discounts: any[];
}

interface Installments {
    quantity: number;
    amount: number;
    rate: number;
    currency_id: string;
}

interface Address {
    state_id: string;
    state_name: string;
    city_id?: any;
    city_name: string;
}

interface Shipping {
    free_shipping: boolean;
    mode: string;
    tags: string[];
    logistic_type: string;
    store_pick_up: boolean;
}

interface Country {
    id: string;
    name: string;
}

interface State {
    id: string;
    name: string;
}

interface City {
    id?: any;
    name: string;
}

interface SellerAddress {
    id: string;
    comment: string;
    address_line: string;
    zip_code: string;
    country: Country;
    state: State;
    city: City;
    latitude: string;
    longitude: string;
}

interface Value {
    id: string;
    name: string;
    struct?: any;
    source: number;
}

interface Attribute {
    value_struct?: any;
    source: number;
    id: string;
    value_id: string;
    value_name: string;
    values: Value[];
    attribute_group_id: string;
    attribute_group_name: string;
    name: string;
}

interface Result {
    id: string;
    site_id: string;
    title: string;
    seller: Seller;
    price: number;
    prices: Prices;
    sale_price?: any;
    currency_id: string;
    available_quantity: number;
    sold_quantity: number;
    buying_mode: string;
    listing_type_id: string;
    stop_time: Date;
    condition: string;
    permalink: string;
    thumbnail: string;
    thumbnail_id: string;
    accepts_mercadopago: boolean;
    installments: Installments;
    address: Address;
    shipping: Shipping;
    seller_address: SellerAddress;
    attributes: Attribute[];
    original_price: number;
    category_id: string;
    official_store_id?: any;
    domain_id: string;
    catalog_product_id?: any;
    tags: string[];
    order_backend: number;
    use_thumbnail_id: boolean;
    offer_score?: any;
    offer_share?: any;
    match_score?: any;
    winner_item_id?: any;
    melicoin?: any;
    discounts?: any;
}
