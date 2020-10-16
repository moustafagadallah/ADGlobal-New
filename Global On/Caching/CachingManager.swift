//
//  CachingManager.swift
//  365Drive
//
//  Created by Al Wefaq on 12/26/19.
//  Copyright © 2019 Al Wefaq Rent a Car. All rights reserved.
//

import UIKit

class CachingManager: NSObject {
    
    class func store(value: Any?, forKey key: String) {
        
        UserDefaults.standard.set(value, forKey: key)
    }
    
    class func removeValue(forKey key: String) {
        
        UserDefaults.standard.removeObject(forKey: key)
    }
    
    class func getValue(forKey key: String) -> Any? {
        
        return UserDefaults.standard.value(forKey: key)
    }
    
    class func storeUserToken(_ token: String?) {
        
        store(value: token, forKey: CachingKeys.Token)
    }
    
    class func removeUserToken() {
        
        removeValue(forKey: CachingKeys.Token)
    }
    
    class func token() -> String? {
        
        return CachingManager.getValue(forKey: CachingKeys.Token) as? String
    }

    class func userName() -> String? {
        
        return jwtModel()?.unique_name
    }
    
    class func userType() -> String? {
           
        return jwtModel()?.userTypeId
       }
    
    class func jwtModel() -> JWtModel? {
        
        let payload = jwtUtils.decode(jwtToken: token())
        return JWtModel(from: payload)
    }
    
    class func userId() -> String? {
        
        //return jwtModel()?.customerId // TODO: Will be uncommented
        //        return (jwtModel()?.customerId == nil) ? nil : "1" // TODO: Will be removed
        
        if let customerIdString = jwtModel()?.customerId,
            let customerId = Int(customerIdString) {
        
            return customerId > 0 ? customerIdString : "1"
        }
        
        return nil
    }
    
    class func mobileNumber() -> String? {
        
        return jwtModel()?.mobileNumber
    }
    
    class func email() -> String? {
        
        return jwtModel()?.email
    }
    
//
//    class func locations() -> [BranchLocation?]? {
//
//        guard let placesData = UserDefaults.standard.object(forKey: CachingKeys.Locations) as? Data else { return nil }
//
//        do {
//            let locations = try JSONDecoder().decode([BranchLocation?]?.self, from: placesData)
//            return locations
//
//        } catch { }
//
//        return nil
//    }
    
//    class func setLocations(_ locations: [BranchLocation?]?) {
//
//        guard let locations = locations else { return }
//
//        do {
//            let placesData = try JSONEncoder().encode(locations)
//            UserDefaults.standard.set(placesData, forKey: CachingKeys.Locations)
//
//        } catch { }
//    }
    
//
//    class func countries() -> [CountryModel?]? {
//
//        guard let countriesData = UserDefaults.standard.object(forKey: CachingKeys.Countries) as? Data else { return nil }
//
//        do {
//            let countries = try JSONDecoder().decode([CountryModel?]?.self, from: countriesData)
//            return countries
//
//        } catch { }
//
//        return nil
    
    
//    class func setCountries(_ countries: [CountryModel?]?) {
//
//        guard let countries = countries else { return }
//
//        do {
//            let countriesData = try JSONEncoder().encode(countries)
//            UserDefaults.standard.set(countriesData, forKey: CachingKeys.Countries)
//
//        } catch { }
//    }
//    
//    class func genders() -> [LookUpResponseModel?]? {
//         
//         guard let geders = UserDefaults.standard.object(forKey: CachingKeys.Genders) as? Data else { return nil }
//         
//         do {
//             let genders = try JSONDecoder().decode([LookUpResponseModel?]?.self, from: geders)
//             return genders
//             
//         } catch { }
//         
//         return nil
//     }
    
//    class func setGenders(_ genders: [LookUpResponseModel?]?) {
//         
//         guard let genders = genders else { return }
//         
//         do {
//             let countriesData = try JSONEncoder().encode(genders)
//             UserDefaults.standard.set(countriesData, forKey: CachingKeys.Genders)
//
//         } catch { }
//    }
    
    
//    class func maritalStatus() -> [LookUpResponseModel?]? {
//
//         guard let maritalStatus = UserDefaults.standard.object(forKey: CachingKeys.MaritalStatus) as? Data else { return nil }
//
//         do {
//             let maritalStatus = try JSONDecoder().decode([LookUpResponseModel?]?.self, from: maritalStatus)
//             return maritalStatus
//
//         } catch { }
//
//         return nil
//     }
    
//    class func setMaritalStatus(_ maritalStatus: [LookUpResponseModel?]?) {
//
//         guard let maritalStatus = maritalStatus else { return }
//
//         do {
//             let maritalStatus = try JSONEncoder().encode(maritalStatus)
//             UserDefaults.standard.set(maritalStatus, forKey: CachingKeys.MaritalStatus)
//
//         } catch { }
//    }

}
