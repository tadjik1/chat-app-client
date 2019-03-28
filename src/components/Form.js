import React, { useState } from 'react';
import SocialButtons from './SocialButtons';

export default function Form(props) {
  const [state, changeState] = useState({});
  
  function setValue(event) {
    changeState({
      ...state,
      [event.target.name]: event.target.value
    });
  }
  
  return (
    <main className="container">
      <div className="row justify-content-center align-items-center">
        <div className="col col-md-6">
          <form
            onSubmit={(event) => props.onSubmit(event, state)}
            className="text-center border border-light p-5"
            noValidate>
            
            <p className="h4 mb-4">{props.title}</p>
            
            {props.error && <p className="text-left text-danger">{props.error}</p>}
  
            {props.fields.map(field => {
              let inputClassname = "form-control";
              if (props.errors) {
                if (props.errors[field.name]) {
                  inputClassname += " is-invalid";
                } else {
                  inputClassname += " is-valid";
                }
              }
    
              return (
                <div className="form-row mb-4">
                  <input
                    value={state[field.name] || ""}
                    onChange={setValue}
                    type={field.type}
                    name={field.name}
                    required
                    className={inputClassname}
                    disabled={props.disabled}
                    placeholder={field.placeholder} />
                  {(props.errors && props.errors[field.name]) && (
                    <div className="invalid-feedback text-left">
                      {props.errors[field.name]}
                    </div>
                  )}
                </div>
              );
            })}

            <button
              disabled={props.disabled}
              className="btn btn-info btn-block my-4"
              type="submit">{props.button}</button>
  
            <props.Footer />
    
            <SocialButtons />
  
          </form>

        </div>
      </div>
    </main>
  );
}

/*
* <div className="card-header">
            <h3>{props.title}</h3>
            <SocialButtons />
          </div>
          <div className="card-body">
            {props.error && <p className="text-danger">{props.error}</p>}
            <form
              onSubmit={(event) => props.onSubmit(event, state)}
              noValidate>
              {props.fields.map(field => {
                let inputClassname = "form-control";
                if (props.errors) {
                  if (props.errors[field.name]) {
                    inputClassname += " is-invalid";
                  } else {
                    inputClassname += " is-valid";
                  }
                }
                
                return (
                  <div key={field.name} className="input-group form-group">
                    <div className="input-group-prepend">
                      <span className="input-group-text">
                        <i className={`fas ${field.icon}`}></i>
                      </span>
                    </div>
                    <input
                      value={state[field.name] || ""}
                      onChange={setValue}
                      type={field.type}
                      name={field.name}
                      required
                      className={inputClassname}
                      disabled={props.disabled}
                      placeholder={field.placeholder} />
                    {(props.errors && props.errors[field.name]) && (
                      <div className="invalid-feedback">
                        {props.errors[field.name]}
                      </div>
                    )}
                  </div>
                );
              })}
              <button
                disabled={props.disabled}
                type="submit"
                className="btn btn-primary">{props.button}</button>
            </form>
          </div>
          <div className="container card-footer">
            <props.Footer />
          </div>
        </div>
*
* */