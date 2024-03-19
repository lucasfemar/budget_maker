class ErrorLog {
    private errorsMessages = [];
    public getErrorsMessages() {
        if (this.errorsMessages.length > 0) {
            return this.errorsMessages.join(',');
        }
        return null;
    }
    public setErrorsMessages(message: string) {
        this.errorsMessages.push(message);
    }
}

export { ErrorLog };
