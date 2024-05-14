class SupportHandler {
    constructor() {
        this.nextHandler = null;
    }

    setNext(handler) {
        this.nextHandler = handler;
    }

    handleRequest(request) {
        if (this.nextHandler !== null) {
            this.nextHandler.handleRequest(request);
        }
    }
}

class RoboticVoiceHandler extends SupportHandler {
    handleRequest(request) {
        if (request === "hardware problem") {
            console.log("Robotic voice: Have you tried turning it off and on again?");
        } else {
            super.handleRequest(request);
        }
    }
}

class OperatorHandler extends SupportHandler {
    handleRequest(request) {
        if (request === "hardware problem") {
            console.log("Operator: Please follow the manual troubleshooting steps.");
        } else {
            super.handleRequest(request);
        }
    }
}

class EngineerHandler extends SupportHandler {
    handleRequest(request) {
        if (request === "hardware problem") {
            console.log("Engineer: Download the appropriate drivers and install them.");
        } else {
            super.handleRequest(request);
        }
    }
}

const roboticVoice = new RoboticVoiceHandler();
const operator = new OperatorHandler();
const engineer = new EngineerHandler();

roboticVoice.setNext(operator);
operator.setNext(engineer);

const clientRequest = "hardware problem";
roboticVoice.handleRequest(clientRequest);
