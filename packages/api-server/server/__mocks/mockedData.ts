import { ResponseData } from "../types/apiData";

export const multiple_contacts: ResponseData = {
  "_class" : "ch.local.storage.model.localentry.v1.PlaceLocalEntry",
  "language" : "de",
  "entry_type" : "place",
  "local_entry_id" : "GXvPAor1ifNfpF0U5PTG0w",
  "source" : {
    "provider" : {
      "name" : "SwisscomDirectories",
      "properties" : {
        "display" : {
          "de" : "Swisscom Directories AG",
          "fr" : "Swisscom Directories SA",
          "it" : "Swisscom Directories SA",
          "en" : "Swisscom Directories AG"
        }
      }
    },
    "subscriber" : {
      "id" : 1000348945
    },
    "source_id" : "25602365"
  },
  "favorited" : false,
  "place_feedback_summary" : {
    "recommendations" : 4794,
    "positive_recommendations" : 4664,
    "display_recommendations" : true,
    "ratings_count" : 4312,
    "feedbacks_count" : 4830,
    "reviews_count" : 304,
    "average_rating" : 4.780225726654322,
    "display_average_rating" : true,
    "rating_summaries" : [ {
      "dimension" : "ambiente",
      "count" : 1477,
      "average" : 4.24373730534868,
      "display" : true
    }, {
      "dimension" : "service",
      "count" : 2917,
      "average" : 4.812821391840933,
      "display" : true
    }, {
      "dimension" : "food",
      "count" : 2870,
      "average" : 4.832752613240418,
      "display" : true
    } ],
    "positive_recommendation_percentage" : 97
  },
  "addresses" : [ {
    "_class" : "ch.local.storage.model.localentry.v1.BusinessAddress",
    "contacts" : [ {
      "_class" : "ch.local.storage.model.contact.v1.ContactType.phone",
      "contact_type" : "phone",
      "service_code" : "0443623509",
      "formatted_service_code" : "044 362 35 09",
      "call_link" : "+41443623509",
      "refuse_advertising" : true,
      "freecall_enabled" : true,
      "preferred" : false,
      "phone_number" : "0443623509",
      "id" : "clWYa215UyMUSYwcsyzOyA"
    }, {
      "_class" : "ch.local.storage.model.contact.v1.ContactType.phone",
      "contact_type" : "phone",
      "service_code" : "0443623523",
      "formatted_service_code" : "044 362 35 23",
      "call_link" : "+41443623523",
      "service_additional_text" : "und",
      "refuse_advertising" : true,
      "freecall_enabled" : true,
      "preferred" : false,
      "phone_number" : "0443623523",
      "id" : "clgw1e8stnmJQn1CWSApcA"
    }, {
      "_class" : "ch.local.storage.model.contact.v1.ContactType.phone",
      "contact_type" : "phone",
      "service_code" : "0443623534",
      "formatted_service_code" : "044 362 35 34",
      "call_link" : "+41443623534",
      "refuse_advertising" : true,
      "freecall_enabled" : true,
      "preferred" : false,
      "phone_number" : "0443623534",
      "id" : "CMyMdPtNd9PI-RxQwDGxKA"
    }, {
      "_class" : "ch.local.storage.model.contact.v1.ContactType.url",
      "contact_type" : "url",
      "service_code" : "http://www.casaferlin.ch",
      "formatted_service_code" : "www.casaferlin.ch",
      "preferred" : false,
      "url" : "http://www.casaferlin.ch",
      "id" : "-ItIm1zKg-FjWBQz5v1Jmw"
    } ],
    "address_id" : "GXvPAor1ifNfpF0U5PTG0w",
    "address_types" : [ "business", "restaurant" ],
    "where" : {
      "street" : "Stampfenbachstrasse",
      "city" : "Zürich",
      "state" : "ZH",
      "geography" : {
        "location" : {
          "lat" : 47.379801,
          "lon" : 8.543377,
          "x" : 683426,
          "y" : 248250,
          "latlon" : "47.379801,8.543377",
          "format2d" : {
            "lng" : 8.543377,
            "lat" : 47.379801
          },
          "geohex" : "QD124276735166322"
        },
        "altitude" : 421,
        "bounding_box" : {
          "lat1" : 8.538352,
          "lat2" : 47.378878,
          "lon1" : 8.543935,
          "lon2" : 47.391373
        }
      },
      "house_number" : "38",
      "zipcode" : 8006
    },
    "place_collections" : [ {
      "tags" : [ "entry:resto", "booking_traits:reservation:restaurant" ],
      "tag" : "entry:resto",
      "id" : "restaurants.entries"
    }, {
      "tags" : [ "resto:featured" ],
      "tag" : "resto:featured",
      "id" : "restaurants.featured"
    }, {
      "tags" : [ "entry:ba_category:restaurants" ],
      "tag" : "entry:ba_category:restaurants",
      "id" : "ba_category.restaurants"
    }, {
      "tags" : [ "resto:vertical" ],
      "tag" : "resto:vertical",
      "id" : "FIxOp7On8V2yk_UIHd5c4w"
    }, {
      "tags" : [ "entry:browse:restaurants_all" ],
      "tag" : "entry:browse:restaurants_all",
      "id" : "browse.restaurants_all"
    }, {
      "tags" : [ "resto:cuisine:italian" ],
      "tag" : "resto:cuisine:italian",
      "id" : "restaurant.category.cuisine.italian"
    }, {
      "tags" : [ "resto:cuisine:mediterranean" ],
      "tag" : "resto:cuisine:mediterranean",
      "id" : "restaurant.category.cuisine.mediterranean"
    } ],
    "business" : {
      "identities" : [ {
        "profession" : "Chiantiquelle",
        "name" : "Casa Ferlin",
        "business_description" : {
          "it" : "Chiantiquelle",
          "de" : "Chiantiquelle",
          "en" : "Chiantiquelle",
          "fr" : "Chiantiquelle"
        }
      } ],
      "categories" : [ {
        "id" : "u37d17CNjz9p2KDXMaPrLw",
        "source_id" : "1512",
        "emoji" : "🍴",
        "name" : {
          "fr" : "Café, Restaurant",
          "en" : "Restaurant",
          "it" : "Ristorante, Caffè, Grotto, Bar",
          "rm" : "Ustarias",
          "de" : "Restaurant"
        },
        "tags" : [ ],
        "icon" : {
          "renditions" : {
            "icon" : "http://images.local.ch/ext/?format=png32&scale=fit&size=200x200&src=http:%2F%2Fbin.staticlocal.ch%2Flocalplace-icon%2Fa0%2Fa06cbed8a653ff43a4049d09267e2c00c6ea8b5d%2Ficon-restaurant.svg&hmac=54ab2ca8df3a0b2f299badfc883d2c738aa5942d"
          },
          "alt" : "Restaurant",
          "asset_id" : "localplace-icon/a0/a06cbed8a653ff43a4049d09267e2c00c6ea8b5d/index.xml",
          "url" : "http://bin.staticlocal.ch/localplace-icon/a0/a06cbed8a653ff43a4049d09267e2c00c6ea8b5d/icon-restaurant.svg"
        }
      }, {
        "id" : "lmwa2OSdl1x6KTmGOnXiZw",
        "source_id" : "947",
        "emoji" : "🍝🇮🇹",
        "name" : {
          "rm" : "Cuschina taliana",
          "en" : "Italian cuisine",
          "fr" : "Cuisine italienne",
          "it" : "Cucina italiana",
          "de" : "Italienische Küche"
        },
        "tags" : [ "restaurant:bookable" ],
        "icon" : {
          "renditions" : {
            "icon" : "http://images.local.ch/ext/?format=png32&scale=fit&size=200x200&src=http:%2F%2Fbin.staticlocal.ch%2Flocalplace-icon%2Fa0%2Fa06cbed8a653ff43a4049d09267e2c00c6ea8b5d%2Ficon-restaurant.svg&hmac=54ab2ca8df3a0b2f299badfc883d2c738aa5942d"
          },
          "alt" : "Restaurant",
          "asset_id" : "localplace-icon/a0/a06cbed8a653ff43a4049d09267e2c00c6ea8b5d/index.xml",
          "url" : "http://bin.staticlocal.ch/localplace-icon/a0/a06cbed8a653ff43a4049d09267e2c00c6ea8b5d/icon-restaurant.svg"
        }
      }, {
        "id" : "jkwQgWauzN3ZLICOZ6HkQQ",
        "source_id" : "937",
        "emoji" : "🍴",
        "name" : {
          "rm" : "Ustarias tenor spezialitads",
          "en" : "Restaurants according to speciality",
          "fr" : "Restaurants par spécialité",
          "it" : "Ristoranti suddivisi per specialità",
          "de" : "Restaurants nach Spezialitäten"
        },
        "tags" : [ ],
        "icon" : {
          "renditions" : {
            "icon" : "http://images.local.ch/ext/?format=png32&scale=fit&size=200x200&src=http:%2F%2Fbin.staticlocal.ch%2Flocalplace-icon%2Fdc%2Fdcd93859649f63d9b015b8ef3e7bab149d768134%2Ficon-default.svg&hmac=fe4027fd8a4c0c75d50ac8100d3320241c9e2403"
          },
          "alt" : "Default Icon - No Category Assigned",
          "asset_id" : "localplace-icon/dc/dcd93859649f63d9b015b8ef3e7bab149d768134/index.xml",
          "url" : "http://bin.staticlocal.ch/localplace-icon/dc/dcd93859649f63d9b015b8ef3e7bab149d768134/icon-default.svg"
        }
      } ],
      "labels" : {
        "de" : [ "gut essen", "Ravioli", "flambieren", "Gourmet", "traditionell" ]
      }
    }
  } ],
  "tags" : [ "asset:local_360", "asset:opening_hours:local_ch", "asset:place_attribute:general_properties:general:spoken_language_de", "asset:place_attribute:general_properties:general:spoken_language_en", "asset:place_attribute:general_properties:general:spoken_language_es", "asset:place_attribute:general_properties:general:spoken_language_fr", "asset:place_attribute:general_properties:general:spoken_language_it", "asset:place_attribute:general_properties:general_geo:city_center", "asset:place_attribute:general_properties:general_geo:close_to_museum", "asset:place_attribute:general_properties:general_geo:close_to_publictransport", "asset:place_attribute:general_properties:general_geo:close_to_trainstation", "asset:place_attribute:general_properties:general_geo:parking", "asset:place_attribute:general_properties:paymentltv:accept_cc", "asset:place_attribute:general_properties:paymentltv:accept_ec", "asset:place_attribute:general_properties:paymentltv:americanexpress", "asset:place_attribute:general_properties:paymentltv:currency_eur", "asset:place_attribute:general_properties:paymentltv:currency_gbp", "asset:place_attribute:general_properties:paymentltv:dinersclub", "asset:place_attribute:general_properties:paymentltv:lunch_check", "asset:place_attribute:general_properties:paymentltv:maestro", "asset:place_attribute:general_properties:paymentltv:mastercard", "asset:place_attribute:general_properties:paymentltv:twint", "asset:place_attribute:general_properties:paymentltv:visa", "asset:place_attribute:restaurant:hospitality_ambiance:cozy", "asset:place_attribute:restaurant:hospitality_ambiance:elegant", "asset:place_attribute:restaurant:hospitality_ambiance:gourmet", "asset:place_attribute:restaurant:hospitality_awards:guide_bleu", "asset:place_attribute:restaurant:hospitality_awards:guide_michelin", "asset:place_attribute:restaurant:hospitality_foodspecial:beef", "asset:place_attribute:restaurant:hospitality_foodspecial:dessert", "asset:place_attribute:restaurant:hospitality_foodspecial:fish", "asset:place_attribute:restaurant:hospitality_foodspecial:gastronomy", "asset:place_attribute:restaurant:hospitality_foodspecial:icecream", "asset:place_attribute:restaurant:hospitality_foodspecial:meat", "asset:place_attribute:restaurant:hospitality_foodspecial:pasta", "asset:place_attribute:restaurant:hospitality_foodspecial:tartare", "asset:place_attribute:restaurant:hospitality_foodspecial:truffe", "asset:place_attribute:restaurant:hospitality_foodspecial:wine", "asset:place_attribute:restaurant:hospitality_foodtype:italian", "asset:place_attribute:restaurant:hospitality_foodtype:mediterranean", "asset:place_attribute:restaurant:hospitality_foodtype:seasonal", "asset:place_attribute:restaurant:hospitality_service:aircondition", "asset:place_attribute:restaurant:hospitality_service:business_lunch", "asset:place_attribute:restaurant:hospitality_service:cigar_lounge", "asset:place_attribute:restaurant:hospitality_service:internet", "asset:place_attribute:restaurant:hospitality_service:lunch", "asset:place_attribute:restaurant:hospitality_service:smoking_lounge", "asset:place_attribute:restaurant:hospitality_service:wine_selection", "asset:place_attributes", "asset:social_media:facebook", "asset:social_media:instagram", "booking_traits:reservation:restaurant", "entry:ba_category:restaurants", "entry:bookable", "entry:bookable:display_hint:book_table", "entry:bookable:localina", "entry:browse:restaurants_all", "entry:business:swisscom_directories", "entry:contact:phone", "entry:contact:url", "entry:has_claimers", "entry:has_followers", "entry:has_images", "entry:has_place_feedbacks", "entry:has_reviews", "entry:has_visible_place_feedbacks", "entry:rateable", "entry:resto", "geo:mappable", "place:wheelchair_accessible", "prod:bke", "prod:hil", "prod:info:opening_hours", "prod:info:payment:americanexpress", "prod:info:payment:card:americanexpress", "prod:info:payment:card:dinersclub", "prod:info:payment:card:maestro", "prod:info:payment:card:mastercard", "prod:info:payment:card:visa", "prod:info:payment:dinersclub", "prod:info:payment:lunch_check", "prod:info:payment:maestro", "prod:info:payment:mastercard", "prod:info:payment:visa", "prod:info:spoken_language:de", "prod:info:spoken_language:en", "prod:info:spoken_language:es", "prod:info:spoken_language:fr", "prod:info:spoken_language:it", "prod:lbp", "prod:lin", "prod:llo", "prod:lnk", "prod:localbusiness:pro", "prod:mba", "prod:mba:has_content", "prod:web_reference:foursquare", "resto:ambiance:cozy", "resto:ambiance:elegant", "resto:ambiance:gourmet", "resto:awards:guide_bleu", "resto:awards:guide_michelin", "resto:bookable", "resto:cuisine:italian", "resto:cuisine:mediterranean", "resto:cuisine:seasonal", "resto:featured", "resto:specialities:beef", "resto:specialities:dessert", "resto:specialities:fish", "resto:specialities:gastronomy", "resto:specialities:icecream", "resto:specialities:meat", "resto:specialities:pasta", "resto:specialities:tartare", "resto:specialities:truffe", "resto:specialities:wine", "resto:vertical" ],
  "displayed_what" : "Casa Ferlin",
  "displayed_where" : "Stampfenbachstrasse 38, 8006 Zürich",
  "opening_hours" : {
    "days" : {
      "monday" : [ {
        "start" : "11:30",
        "end" : "14:00",
        "type" : "OPEN"
      }, {
        "start" : "18:30",
        "end" : "22:00",
        "type" : "OPEN"
      } ],
      "tuesday" : [ {
        "start" : "11:30",
        "end" : "14:00",
        "type" : "OPEN"
      }, {
        "start" : "18:30",
        "end" : "22:00",
        "type" : "OPEN"
      } ],
      "wednesday" : [ {
        "start" : "11:30",
        "end" : "14:00",
        "type" : "OPEN"
      }, {
        "start" : "18:30",
        "end" : "22:00",
        "type" : "OPEN"
      } ],
      "thursday" : [ {
        "start" : "11:30",
        "end" : "14:00",
        "type" : "OPEN"
      }, {
        "start" : "18:30",
        "end" : "22:00",
        "type" : "OPEN"
      } ],
      "friday" : [ {
        "start" : "11:30",
        "end" : "14:00",
        "type" : "OPEN"
      }, {
        "start" : "18:30",
        "end" : "22:00",
        "type" : "OPEN"
      } ]
    },
    "closed_on_holidays" : true,
    "open_by_arrangement" : false
  },
  "creation_date" : "2012-09-18T13:53:10.018+02:00",
  "modified_date" : "2019-10-20T00:31:43.049+02:00",
  "_update_process_type" : "user_request"
}

export const single_contacts: ResponseData = {
  "_class" : "ch.local.storage.model.localentry.v1.PlaceLocalEntry",
  "language" : "fr",
  "entry_type" : "place",
  "local_entry_id" : "ohGSnJtMIC5nPfYRi_HTAg",
  "source" : {
    "provider" : {
      "name" : "SwisscomDirectories",
      "properties" : {
        "display" : {
          "de" : "Swisscom Directories AG",
          "fr" : "Swisscom Directories SA",
          "it" : "Swisscom Directories SA",
          "en" : "Swisscom Directories AG"
        }
      }
    },
    "subscriber" : {
      "id" : 1010197979
    }
  },
  "favorited" : false,
  "place_feedback_summary" : {
    "recommendations" : 7,
    "positive_recommendations" : 6,
    "display_recommendations" : true,
    "ratings_count" : 5,
    "feedbacks_count" : 7,
    "reviews_count" : 0,
    "average_rating" : 4.0,
    "display_average_rating" : true,
    "rating_summaries" : [ {
      "dimension" : "ambiente",
      "count" : 5,
      "average" : 3.6,
      "display" : true
    }, {
      "dimension" : "service",
      "count" : 5,
      "average" : 4.0,
      "display" : true
    }, {
      "dimension" : "food",
      "count" : 5,
      "average" : 4.4,
      "display" : true
    } ],
    "positive_recommendation_percentage" : 86
  },
  "addresses" : [ {
    "_class" : "ch.local.storage.model.localentry.v1.BusinessAddress",
    "contacts" : [ {
      "_class" : "ch.local.storage.model.contact.v1.ContactType.phone",
      "contact_type" : "phone",
      "service_code" : "0273211181",
      "formatted_service_code" : "027 321 11 81",
      "call_link" : "+41273211181",
      "refuse_advertising" : true,
      "freecall_enabled" : true,
      "preferred" : false,
      "id" : "-EsNEvu6_7uC3O8Lv_sLGw",
      "phone_number" : "0273211181"
    }, {
      "_class" : "ch.local.storage.model.contact.v1.ContactType.url",
      "contact_type" : "url",
      "service_code" : "http://cafemarche.ch",
      "formatted_service_code" : "cafemarche.ch",
      "preferred" : false,
      "id" : "IH9OKEkWYEz__6i_w17IQA",
      "url" : "http://cafemarche.ch"
    } ],
    "address_id" : "ohGSnJtMIC5nPfYRi_HTAg",
    "address_types" : [ "business", "restaurant" ],
    "where" : {
      "street" : "Rue de Conthey",
      "city" : "Sion",
      "state" : "VS",
      "geography" : {
        "location" : {
          "lat" : 46.232943,
          "lon" : 7.358963,
          "x" : 593853,
          "y" : 120170,
          "latlon" : "46.232943,7.358963",
          "format2d" : {
            "lng" : 7.358963,
            "lat" : 46.232943
          },
          "geohex" : "QA783482310300135"
        },
        "altitude" : 516,
        "bounding_box" : {
          "lat1" : 7.358587,
          "lat2" : 46.232888,
          "lon1" : 7.360349,
          "lon2" : 46.233663
        }
      },
      "house_number" : "17",
      "zipcode" : 1950
    },
    "place_collections" : [ {
      "tags" : [ "entry:resto", "booking_traits:reservation:restaurant" ],
      "tag" : "entry:resto",
      "id" : "restaurants.entries"
    }, {
      "tags" : [ "entry:ba_category:restaurants" ],
      "tag" : "entry:ba_category:restaurants",
      "id" : "ba_category.restaurants"
    }, {
      "tags" : [ "resto:vertical" ],
      "tag" : "resto:vertical",
      "id" : "FIxOp7On8V2yk_UIHd5c4w"
    }, {
      "tags" : [ "resto:cuisine:french" ],
      "tag" : "resto:cuisine:french",
      "id" : "restaurant.category.cuisine.french"
    }, {
      "tags" : [ "entry:browse:restaurants_all" ],
      "tag" : "entry:browse:restaurants_all",
      "id" : "browse.restaurants_all"
    } ],
    "business" : {
      "identities" : [ {
        "profession" : "Restaurant",
        "name" : "Le Café du Marché",
        "business_description" : {
          "de" : "Restaurant",
          "it" : "Restaurant",
          "fr" : "Restaurant",
          "en" : "Restaurant"
        }
      } ],
      "categories" : [ {
        "id" : "uiCU17QD7NGIBpmGHpwXxA",
        "source_id" : "943",
        "emoji" : "🇫🇷",
        "name" : {
          "fr" : "Cuisine française",
          "rm" : "Cuschina franzosa",
          "en" : "French cuisine",
          "it" : "Cucina francese",
          "de" : "Französische Küche"
        },
        "tags" : [ "restaurant:bookable" ],
        "icon" : {
          "renditions" : {
            "icon" : "http://images.local.ch/ext/?format=png32&scale=fit&size=200x200&src=http:%2F%2Fbin.staticlocal.ch%2Flocalplace-icon%2Fa0%2Fa06cbed8a653ff43a4049d09267e2c00c6ea8b5d%2Ficon-restaurant.svg&hmac=54ab2ca8df3a0b2f299badfc883d2c738aa5942d"
          },
          "alt" : "Restaurant",
          "asset_id" : "localplace-icon/a0/a06cbed8a653ff43a4049d09267e2c00c6ea8b5d/index.xml",
          "url" : "http://bin.staticlocal.ch/localplace-icon/a0/a06cbed8a653ff43a4049d09267e2c00c6ea8b5d/icon-restaurant.svg"
        }
      } ]
    }
  } ],
  "tags" : [ "asset:opening_hours:tripadvisor", "booking_traits:reservation:restaurant", "entry:ba_category:restaurants", "entry:browse:restaurants_all", "entry:business:swisscom_directories", "entry:contact:phone", "entry:contact:url", "entry:has_claimers", "entry:has_followers", "entry:has_place_feedbacks", "entry:has_visible_place_feedbacks", "entry:rateable", "entry:resto", "geo:mappable", "prod:hil", "prod:info:opening_hours", "prod:lbp", "prod:lin", "prod:llo", "prod:lnk", "prod:localbusiness:pro", "prod:web_reference:foursquare", "resto:cuisine:french", "resto:vertical" ],
  "displayed_what" : "Le Café du Marché",
  "displayed_where" : "Rue de Conthey 17, 1950 Sion",
  "opening_hours" : {
    "days" : {
      "tuesday" : [ {
        "start" : "11:30",
        "end" : "15:00",
        "type" : "OPEN"
      }, {
        "start" : "18:30",
        "end" : "00:00",
        "type" : "OPEN"
      } ],
      "wednesday" : [ {
        "start" : "11:30",
        "end" : "15:00",
        "type" : "OPEN"
      }, {
        "start" : "18:30",
        "end" : "00:00",
        "type" : "OPEN"
      } ],
      "thursday" : [ {
        "start" : "11:30",
        "end" : "15:00",
        "type" : "OPEN"
      }, {
        "start" : "18:30",
        "end" : "00:00",
        "type" : "OPEN"
      } ],
      "friday" : [ {
        "start" : "11:30",
        "end" : "15:00",
        "type" : "OPEN"
      }, {
        "start" : "18:30",
        "end" : "00:00",
        "type" : "OPEN"
      } ],
      "saturday" : [ {
        "start" : "18:00",
        "end" : "00:00",
        "type" : "OPEN"
      } ],
      "sunday" : [ {
        "start" : "11:30",
        "end" : "15:00",
        "type" : "OPEN"
      } ]
    }
  },
  "creation_date" : "2016-05-13T00:59:27.009+02:00",
  "modified_date" : "2019-10-11T08:17:24.211+02:00",
  "_update_process_type" : "batch"
}