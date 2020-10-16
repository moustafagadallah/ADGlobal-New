//
//  Decodable+Parsing.swift
//  365Drive
//
//  Created by Ahmed Naguib on 12/18/19.
//  Copyright © 2019 Al Wefaq Rent a Car. All rights reserved.
//

import Foundation

extension Decodable {
    
    init?(from response: Any?) {
        
        do {
            guard let response = response else { return nil }
            
            let data = try JSONSerialization.data(withJSONObject: response, options: .prettyPrinted)
            self = try JSONDecoder().decode(Self.self, from: data)
            
        } catch {
            
            return nil
        }
    }
}
