//
//  Constants.swift
//  Global On
//
//  Created by Al Wefaq on 9/13/20.
//  Copyright © 2020 Global On. All rights reserved.
//

import Foundation
import UIKit

enum LocalizationConstants {
    
    static let AppleLanguages = "AppleLanguages"
}

enum API {

}

enum Storyboards {
    static let Login = "Login"
}

enum Fonts {
    
    static let CairoBlack = "Cairo-Black"
    static let CairoBold = "Cairo-Bold"
    static let CairoExtraLight = "Cairo-ExtraLight"
    static let CairoLight = "Cairo-Light"
    static let CairoRegular = "Cairo-Regular"
    static let CairoSemiBold = "Cairo-SemiBold"
    static let MontserratBlack = "Montserrat-Black"
    static let MontserratBold = "Montserrat-Bold"
    static let MontserratExtraLight = "Montserrat-ExtraLight"
    static let MontserratLight = "Montserrat-Light"
    static let MontserratMedium = "Montserrat-Medium"
    static let MontserratRegular = "Montserrat-Regular"
    static let MontserratSemiBold = "Montserrat-SemiBold"

}

enum MaxEntryDigits {
    
    static let Mobile = 20
    static let DocumentId = 20
    static let ResidencyNumber = 10
    static let DrivingLicenseYears = 10
    static let BirthDate = 18
    static let CountryCode = 5
    static let Passport = 15
    static let DamageDescription = 400
}

enum MinEntryDigits {
    
    static let Mobile = 13
    static let Passport = 8
    static let DocumentId = 8
    static let ResidencyNumber = 10
    static let OTP = 1
}

enum AlphaStyles {
    
    static let enabled: CGFloat = 1.0
    static let disabled: CGFloat = 0.4
    static let transparent: CGFloat = 0.7
    static let hidden: CGFloat = 0
}


enum DateFormats {
   
    static let APIRecievedLongDateFormat = "yyyy-MM-dd'T'HH:mm:ss'Z'"
    static let APILongDateFormat = "yyyy-MM-dd'T'HH:mm:ss.SSS'Z'"
    static let APIFullRecievedDate = "yyyy-MM-dd'T'HH:mm:ssZ"
    static let DateOnly = "dd/MM/yyyy"
    static let DateAndTime = "dd/MM/yyyy - hh:mm a"
    static let FullDate = "EEEE, MMMM dd 'at' hh:mm a"
 }
enum ErrorType {
    
    static let ValidationException = "ValidationException"
}

enum CachingKeys {
    
    static let Token = "Token"
    static let UserJWT = "UserJWT"
    static let Locations = "Locations"
    static let Countries = "Countries"
    static let Genders = "Genders"
    static let MaritalStatus = "MaritalStatus"
    static let UserType = "UserType"

}

enum LayoutPriority {
    
    static let Required = UILayoutPriority(rawValue: 999)
}

enum MapZoomLevels {
    
    static let offlineZoomLevel : Float = 17
}

enum Compression {
    
    static let DefaultImageCompressionQuality: CGFloat = 0.01
}
enum CellHeight {
    
    static let DefaultHeight: CGFloat = 125
    
    static let MinimumHeight: CGFloat = 100
}

enum GoogleMaps {
    
    static let browserUrl = "http://www.google.co.in/maps/dir/"
    static let appUrl = "http://maps.google.com/"
    static let appSchema = "comgooglemaps://"
}

enum CountryCodes {
    
    static let saudiArabia = "SA"
}

enum MapMarkerIcon {
    
    static let defaultMarkerIconName = "Weem pin"
    static let selectedMarkerIconName = "Selected Pin"
}

enum NotificationPostName {
    
    static let BookingsNeedUpdate = "BookingsNeedUpdate"
    static let ContractsNeedUpdate = "ContractsNeedUpdate"
}


enum NumberFormating{
    static let formatTwoDigits  = "%02d"
}

