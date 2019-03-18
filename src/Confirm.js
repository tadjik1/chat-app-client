import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Redirect, Link } from 'react-router-dom';
import { confirm } from './actions/auth';

function Confirm({token, confirmation, confirmAction, match}) {
  if (token) return <Redirect to="/" />;
  
  useEffect(() => {
    confirmAction({verificationToken: match.params.verificationToken});
  }, []);

  return (
    <main className="container">
      <div className="row login-form justify-content-center align-items-center">
        <div className="col col-md-6">
          <div className="card-header">
            <h3>Подтверждение почтового адреса</h3>
          </div>
          <div className="card-body">
            {confirmation.error
              ? <React.Fragment>
                  <p className="text-danger">При выполнени операции произошла ошибка.</p>
                  <p className="text-danger">{confirmation.error}</p>
                  <Link to="/">Sign In</Link>
                </React.Fragment>
              : <React.Fragment>
                  <p>Почтовый адрес подтверждается, пожалуйста, подождите.</p>
                  <div className="spinner-border" role="status">
                    <span className="sr-only">Loading...</span>
                  </div>
                </React.Fragment>
            }
          </div>
        </div>
      </div>
    </main>
  );
}

function mapStateToProps(state) {
  return { confirmation: state.confirmation, token: state.token };
}

const mapDispatchToProps = { confirmAction: confirm };

export default connect(mapStateToProps, mapDispatchToProps)(Confirm);
