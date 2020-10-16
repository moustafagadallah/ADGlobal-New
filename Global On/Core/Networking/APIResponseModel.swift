//
//  APIResponseModel.swift
//  Global On
//
//  Created by Al Wefaq on 9/13/20.
//  Copyright © 2020 Global On. All rights reserved.
//

import Foundation
import AnyCodable

class APIResponseModel: BaseModel, Codable {

    var result: AnyCodable?
    var targetUrl: String?
    var success: Bool?
    var error: BusinessErrorModel?
    var unAuthorizedRequest: Bool?
    var __abp: Bool?
}
