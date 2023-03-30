export interface ResponseData {
	_class:                 string;
	language:               string;
	entry_type:             string;
	local_entry_id:         string;
	source:                 Source;
	favorited:              boolean;
	place_feedback_summary: PlaceFeedbackSummary;
	addresses:              Address[];
	tags:                   string[];
	displayed_what:         string;
	displayed_where:        string;
	opening_hours:          OpeningHours;
	creation_date:          string;
	modified_date:          string;
	_update_process_type:   string;
}

export interface Address {
	_class:            string;
	contacts:          Contact[];
	address_id:        string;
	address_types:     string[];
	where:             Where;
	place_collections: PlaceCollection[];
	business:          Business;
}

export interface Business {
	identities: Identity[];
	categories: Category[];
	labels?:     Labels;
}

export interface Category {
	id:        string;
	source_id: string;
	emoji:     string;
	name:      Display;
	tags:      string[];
	icon:      Icon;
}

export interface Icon {
	renditions: Renditions;
	alt:        string;
	asset_id:   string;
	url:        string;
}

export interface Renditions {
	icon: string;
}

export interface Display {
	fr:  string;
	en:  string;
	it:  string;
	rm?: string;
	de:  string;
}

export interface Identity {
	profession:           string;
	name:                 string;
	business_description: Display;
}

export interface Labels {
	de: string[];
}

export type ContactType = "phone" | "url"

export interface Contact {
	_class:                   string;
	contact_type:             string;
	service_code:             string;
	formatted_service_code:   string;
	call_link?:               string;
	refuse_advertising?:      boolean;
	freecall_enabled?:        boolean;
	preferred:                boolean;
	phone_number?:            string;
	id:                       string;
	service_additional_text?: string;
	url?:                     string;
}

export interface PlaceCollection {
	tags: string[];
	tag:  string;
	id:   string;
}

export interface Where {
	street:       string;
	city:         string;
	state:        string;
	geography:    Geography;
	house_number: string;
	zipcode:      number;
}

export interface Geography {
	location:     Location;
	altitude:     number;
	bounding_box: BoundingBox;
}

export interface BoundingBox {
	lat1: number;
	lat2: number;
	lon1: number;
	lon2: number;
}

export interface Location {
	lat:      number;
	lon:      number;
	x:        number;
	y:        number;
	latlon:   string;
	format2d: Format2D;
	geohex:   string;
}

export interface Format2D {
	lng: number;
	lat: number;
}


export interface OpeningHours {
	days:                Days;
	closed_on_holidays?:  boolean;
	open_by_arrangement?: boolean;
}

export type DayNames = "monday" | "tuesday" | "wednesday" | "thursday" | "friday" | "saturday" | "sunday";

export type Days = Partial<Record<DayNames, Day[]>>;

export interface Day {
	start?: string;
	end?:   string;
	type:  DayStatus;
}

export type DayStatus = "OPEN" | "CLOSED";

export interface PlaceFeedbackSummary {
	recommendations:                    number;
	positive_recommendations:           number;
	display_recommendations:            boolean;
	ratings_count:                      number;
	feedbacks_count:                    number;
	reviews_count:                      number;
	average_rating:                     number;
	display_average_rating:             boolean;
	rating_summaries:                   RatingSummary[];
	positive_recommendation_percentage: number;
}

export interface RatingSummary {
	dimension: string;
	count:     number;
	average:   number;
	display:   boolean;
}

export interface Source {
	provider:   Provider;
	subscriber: Subscriber;
	source_id?:  string;
}

export interface Provider {
	name:       string;
	properties: Properties;
}

export interface Properties {
	display: Display;
}

export interface Subscriber {
	id: number;
}
