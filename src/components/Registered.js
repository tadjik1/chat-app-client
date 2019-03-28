import React from 'react';

export default function Registered() {
  return (
    <main className="container">
      <div className="row login-form justify-content-center align-items-center">
        <div className="col col-md-6">
          <div className="text-center border border-light p-5">
            <p className="h4 mb-4">Поздравляем, вы зарегистрированы!</p>
            
            <p>На указанную вами почту отправлено письмо.</p>
            <p>Для завершения регистрации, пожалуйста, перейдите по ссылке из этого письма.</p>
          </div>
        </div>
      </div>
    </main>
  );
}
