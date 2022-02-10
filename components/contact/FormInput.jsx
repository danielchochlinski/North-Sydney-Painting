import useInput from "../../hooks/useInput";

const isNotEmpty = (value) => value.trim() !== "";

function FormInput() {
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
    setError(null);

    let data = {
      name: enteredName,
      email: enteredEmail,
      subject: enteredSubject,
      message: enteredMessage,
    };

    try {
      const response = await fetch("/api/submitContactForm", {
        method: "POST",
        body: JSON.stringify(data),
      });
      if (!response.ok) {
        throw new Error("Something went wrong!");
      }
    } catch (error) {
      console.log(error.message);
    }

    resetNameInput();
    resetEmailInput();
    resetSubjectInput();
    resetMessageInput();
  }

  return (
    <form onSubmit={sendEmailHandler}>
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
      <div className="buttonContact">
        <button>CONTACT US!</button>
      </div>
    </form>
  );
}

export default FormInput;
