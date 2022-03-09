import useInput from "../../hooks/useInput";
import NotificationContext from "../../store/notification-context";
import { useContext } from "react";
const isNotEmpty = (value) => value.trim() !== "";

function FormInput() {
  const notificationCtx = useContext(NotificationContext);
  const {
    value: enteredName,
    isValid: nameIsValid,
    hasError: nameInputHasError,
    valueChangeHandler: nameChangeHandler,
    inputBlurHandler: nameBlurHandler,
    reset: resetNameInput,
  } = useInput(isNotEmpty);

  const {
    value: enteredEmail,
    isValid: emailIsValid,
    hasError: emailInputHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmailInput,
  } = useInput(isNotEmpty);

  const {
    value: enteredPhone,
    isValid: phoneIsValid,
    hasError: phoneInputHasError,
    valueChangeHandler: phoneChangeHandler,
    inputBlurHandler: phoneBlurHandler,
    reset: resetPhoneInput,
  } = useInput(isNotEmpty);

  const {
    value: enteredMessage,
    isValid: messageIsValid,
    hasError: messageInputHasError,
    valueChangeHandler: messageChangeHandler,
    inputBlurHandler: messageBlurHandler,
    reset: resetMessageInput,
  } = useInput(isNotEmpty);

  let formIsValid = false;
  if (nameIsValid && emailIsValid && phoneIsValid && messageIsValid) {
    formIsValid = true;
  }

  async function sendEmailHandler(e) {
    e.preventDefault();

    if (!formIsValid) {
      return;
    }

    let data = {
      name: enteredName,
      email: enteredEmail,
      phone: enteredPhone,
      message: enteredMessage,
    };

    try {
      const response = await fetch("/api/submitContactForm", {
        method: "POST",
        body: JSON.stringify(data),
      });
      notificationCtx.showNotification({
        title: "Successful",
        message: "Your quote is on your way",
        status: "success",
      });
     
    } catch (error) {
      notificationCtx.showNotification({
        title: "Unsuccesful",
        message:
          "Apologies for the inconvenience, please call us at : 0487 556 397",
        status: "error",
      });
      console.log(error.message);
    }

    resetNameInput();
    resetEmailInput();
    resetPhoneInput();
    resetMessageInput();
  }

  return (
    <form className="formInput" onSubmit={sendEmailHandler}>
      <div>
        <input
          placeholder="Name"
          type="text"
          value={enteredName}
          onChange={nameChangeHandler}
          onBlur={nameBlurHandler}
        />
      </div>
      <div>
        <input
          placeholder="Email"
          type="text"
          value={enteredEmail}
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
        />
      </div>
      <div>
        <input
          placeholder="Phone Number"
          type="text"
          value={enteredPhone}
          onChange={phoneChangeHandler}
          onBlur={phoneBlurHandler}
        />
      </div>
      <div className="lastInput">
        <textarea
          placeholder="Message"
          type="text"
          value={enteredMessage}
          onChange={messageChangeHandler}
          onBlur={messageBlurHandler}
        />
      </div>
      <button>CONTACT US!</button>
    </form>
  );
}

export default FormInput;
