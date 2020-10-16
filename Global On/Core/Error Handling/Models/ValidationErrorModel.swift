//
//  ValidationErrorModel.swift
//  365Drive
//
//  Created by Ahmed Naguib on 12/20/19.
//  Copyright © 2019 Al Wefaq Rent a Car. All rights reserved.
//

import UIKit
import AnyCodable

class ValidationErrorModel: BaseModel, Codable {
    
    var members: [String]?
    var message: String?
}
