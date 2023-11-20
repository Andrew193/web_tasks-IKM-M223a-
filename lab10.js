class OrderPageMediator {
    constructor(deliveryDateComponent, timeSlotsComponent, recipientInfoComponent, deliveryOptionComponent) {
        this.deliveryDateComponent = deliveryDateComponent;
        this.timeSlotsComponent = timeSlotsComponent;
        this.recipientInfoComponent = recipientInfoComponent;
        this.deliveryOptionComponent = deliveryOptionComponent;
    }

    setDeliveryDate(date) {
        this.deliveryDateComponent.setDeliveryDate(date);
        this.timeSlotsComponent.updateTimeSlots(date);
    }

    toggleRecipientFieldsVisibility(state) {
        this.recipientInfoComponent.toggleRecipientFields(state);
    }

    toggleDeliveryInformationActivity(state) {
        this.deliveryOptionComponent.toggleDeliveryInformation(state);
    }
}

class DeliveryDateComponent {
    setDeliveryDate(date) {
    }
}

class TimeSlotsComponent {
    updateTimeSlots(date) {
    }
}

class RecipientInfoComponent {
    toggleRecipientFields(state) {
    }
}

class DeliveryOptionComponent {
    toggleDeliveryInformation(state) {
    }
}

// Usage example:
const deliveryDateComponent = new DeliveryDateComponent();
const timeSlotsComponent = new TimeSlotsComponent();
const recipientInfoComponent = new RecipientInfoComponent();
const deliveryOptionComponent = new DeliveryOptionComponent();

const mediator = new OrderPageMediator(deliveryDateComponent, timeSlotsComponent, recipientInfoComponent, deliveryOptionComponent);

mediator.setDeliveryDate('13/12/2001');
mediator.toggleRecipientFieldsVisibility(true);
mediator.toggleDeliveryInformationActivity(true);
