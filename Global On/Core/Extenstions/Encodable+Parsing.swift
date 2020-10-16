//
//  Encodable+Parsing.swift
//  365Drive
//
//  Created by Ahmed Naguib on 2/17/20.
//  Copyright © 2020 Al Wefaq Rent a Car. All rights reserved.
//

import UIKit

extension Encodable {

    func toDictionary(_ encoder: JSONEncoder = JSONEncoder()) -> [String: Any]? {
        
        do {
            let data = try encoder.encode(self)
            let object = try JSONSerialization.jsonObject(with: data) as? [String : Any]
                        
            return object
            
        } catch {
            
            return nil
        }
    }
}
