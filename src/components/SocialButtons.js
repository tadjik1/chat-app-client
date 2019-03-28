import React from 'react';
import { connect } from 'react-redux';
import { oauth } from '../store/actions';

function SocialButtons({ oauth, oauthAction }) {
  function getOAuthLink(provider) {
    return () => oauthAction({provider});
  }

  return (
    <React.Fragment>
      <p>or use social networks:</p>
      
      <button className="btn btn-link btn-lg text-info mx-2" onClick={getOAuthLink('facebook')}>
        <i className="fab fa-facebook-f"/>
      </button>
      <button className="btn btn-link btn-lg text-info mx-2" onClick={getOAuthLink('vkontakte')}>
        <i className="fab fa-vk"/>
      </button>
      <button className="btn btn-link btn-lg text-info mx-2" onClick={getOAuthLink('github')}>
        <i className="fab fa-github"/>
      </button>
    </React.Fragment>
  );
}

function mapStateToProps(state) {
  return { oauth: state.oauth };
}

const mapDispatchToProps = { oauthAction: oauth };

export default connect(mapStateToProps, mapDispatchToProps)(SocialButtons);