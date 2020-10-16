//
//  BusinessErrorModel.swift
//  365Drive
//
//  Created by Ahmed Naguib on 12/20/19.
//  Copyright © 2019 Al Wefaq Rent a Car. All rights reserved.
//

import UIKit
import AnyCodable

class BusinessErrorModel: BaseModel, Codable {

    var type: String?
    var code: String?
    var title: String?
    var body: String?
    var errorProperties: AnyCodable?
    var validationErrors: [ValidationErrorModel?]?
}
