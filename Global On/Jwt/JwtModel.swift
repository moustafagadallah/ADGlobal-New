//
//  JwtModel.swift
//  Global On
//
//  Created by Al Wefaq on 9/14/20.
//  Copyright © 2020 Global On. All rights reserved.
//

import UIKit

class JWtModel: BaseModel, Codable {
        
    var iss: String?
    var aud: String?
    var jti: String?
    var unique_name: String?
    var email: String?
    var mobileNumber: String?
    var customerId: String?
    var customerGUID: String?
    var firstName: String?
    var secondName: String?
    var thirdName: String?
    var fourthName: String?
    var lastName: String?
    var userId: String?
    var userGUID: String?
    var allowedBookingFromDate: String?
    var allowedBookingToDate: String?
    var driverLicenseExpiryDate: String?
    var documentExpiryDate: String?
    var nameId: String?
    var userTypeId: String?
    var nbf: Int?
    var exp: Int?
    var iat: Int?

    private enum CodingKeys: String, CodingKey {

        case iss = "iss"
        case aud = "aud"
        case jti = "jti"
        case unique_name = "unique_name"
        case email = "email"
        case mobileNumber = "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/mobilephone"
        case customerId = "CustomerId"
        case customerGUID = "CustomerGuid"
        case firstName = "FirstName"
        case secondName = "SecondName"
        case thirdName = "ThirdName"
        case fourthName = "FourthName"
        case lastName = "LastName"
        case userId = "UserId"
        case userGUID = "UserGuid"
        case allowedBookingFromDate = "AllowedBookingFromDate"
        case allowedBookingToDate = "AllowedBookingToDate"
        case driverLicenseExpiryDate = "DriverLicenseExpiryDate"
        case documentExpiryDate = "DocumentExpiryDate"
        case userTypeId = "UserTypeId"
        case nameId = "nameid"
        case nbf = "nbf"
        case exp = "exp"
        case iat = "iat"
    }
}

