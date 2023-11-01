// Abstract class defining the Template Method
class UpdateEntityTemplate {
    // The template method
    updateEntity(entity) {
        // Step 1: Receive the object that needs to be updated
        const object = this.receiveObject(entity);
        // Step 2: Validation of output data
        if (this.validate(object)) {
            // Step 3: Form a request to save information
            const request = this.formRequest(object);

            // Step 4: Response generation
            const response = this.generateResponse(request, entity);

            return response;
        } else {
            // Notify administrator for failed validation
            this.notifyAdministrator(entity);
            return null;
        }
    }

    // Abstract method to receive the object
    receiveObject(entity) {}

    // Abstract method for validation
    validate(object) {}

    // Abstract method to form the request
    formRequest(object) {}

    // Abstract method to generate the response
    generateResponse(request, entity) {}

    // Abstract method to notify administrator
    notifyAdministrator(entity) {}
}

// Concrete class for Product entity
class ProductUpdate extends UpdateEntityTemplate {
    receiveObject(entity) {
        // Implementation specific to Product entity
        return entity;
    }

    validate(object) {
        // Implementation specific to Product entity
        return false;
    }

    formRequest(object) {
        // Implementation specific to Product entity
        return {...object, requestData: "Product entity"}
    }

    generateResponse(request, entity) {
        // Implementation specific to Product entity
        return {request, entity}
    }

    notifyAdministrator(entity) {
        // Notify administrator for failed validation of Product
        console.log("Notify administrator for failed validation of Product")
    }
}

// Concrete class for User entity
class UserUpdate extends UpdateEntityTemplate {
    receiveObject(entity) {
        // Implementation specific to User entity
        return entity;
    }

    validate(object) {
        // Implementation specific to User entity
        return true;
    }

    formRequest(object) {
        // Implementation specific to User entity
        return {...object, requestData: "User entity"}
    }

    generateResponse(request, entity) {
        // Implementation specific to User entity
        return {request, entity}
    }

    notifyAdministrator(entity) {
        // Notify administrator for failed validation of User
        console.log("Notify administrator for failed validation of User")
    }
}

// Concrete class for Order entity
class OrderUpdate extends UpdateEntityTemplate {
    receiveObject(entity) {
        // Implementation specific to Order entity
        return entity;
    }

    validate(object) {
        // Implementation specific to Order entity
        return false;
    }

    formRequest(object) {
        // Implementation specific to Order entity
        return {...object, requestData: "Order entity"}
    }

    generateResponse(request, entity) {
        // Implementation specific to Order entity
        return {request, entity}
    }

    notifyAdministrator(entity) {
        // Notify administrator for failed validation of Order
        console.log("Notify administrator for failed validation of Order")
    }
}

// Usage
const productUpdate = new ProductUpdate();
const userUpdate = new UserUpdate();
const orderUpdate = new OrderUpdate();

const productEntity = {userEntity: "productEntity"};
const userEntity = {userEntity: "userEntity"};
const orderEntity = {orderEntity: "orderEntity"};

const productResponse = productUpdate.updateEntity(productEntity);
console.log(productResponse, "productResponse")
const userResponse = userUpdate.updateEntity(userEntity);
console.log(userResponse, "userResponse")
const orderResponse = orderUpdate.updateEntity(orderEntity);
console.log(orderResponse, "orderResponse")
// Report on the work performed can be generated here.
