//
//  String+Utils.swift
//  365Drive
//
//  Created by Ahmed Naguib on 12/15/19.
//  Copyright © 2019 Al Wefaq Rent a Car. All rights reserved.
//

import UIKit

extension String {

    func rawMobileNumber() -> String {
        
        var rawMobile = self.replacingOccurrences(of: " ", with: "")
        rawMobile = rawMobile.replacingOccurrences(of: "-", with: "")
        return rawMobile
    }
    
    func rawPhoneCode() -> String {
          
          return self.replacingOccurrences(of: "+", with: "")
      }
    
    func toDictionary() -> [String : Any?]? {
        
        let data = Data(self.utf8)
        
        do {
            let dictionary = try JSONSerialization.jsonObject(with: data, options: JSONSerialization.ReadingOptions.allowFragments) as? [String : Any?]
            return dictionary
            
        } catch {
            
            return nil
        }
    }
}
