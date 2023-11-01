class DeliveryStrategy {
    calculateCost() {
    }
}

class PickupStrategy extends DeliveryStrategy {
    calculateCost(order) {
        console.log("PickupStrategy calculateCost:", order.price * 4)
        return order.price * 4;
    }
}

class ExternalServiceStrategy extends DeliveryStrategy {
    calculateCost(order) {
        console.log("ExternalServiceStrategy calculateCost:", order.price * 3)
        return order.price * 3;
    }
}

class OwnServiceStrategy extends DeliveryStrategy {
    calculateCost(order) {
        console.log("OwnServiceStrategy calculateCost:", order.price * 2)
        return order.price * 2;
    }
}

class DeliveryCostCalculator {
    constructor(strategy) {
        this.strategy = strategy;
    }

    setStrategy(strategy) {
        this.strategy = strategy;
    }

    calculateCost(order) {
        return this.strategy.calculateCost(order);
    }
}

const order = {price: 300}
const calculator = new DeliveryCostCalculator(new PickupStrategy());

// Change the delivery strategy at runtime
calculator.setStrategy(new ExternalServiceStrategy());

const cost = calculator.calculateCost(order);
console.log(`Delivery cost: ${cost}`);
