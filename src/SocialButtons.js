import React from 'react';
import { connect } from 'react-redux';
import { oauth } from './actions/auth';

function SocialButtons({ oauth, oauthAction }) {
  function getOAuthLink(provider) {
    oauthAction({provider});
  }
  
  return (
    <div className="d-flex justify-content-end social_icon">
      <span onClick={() => getOAuthLink('facebook')}>
        <i className="fab fa-facebook text-primary"></i>
      </span>
      <span onClick={() => getOAuthLink('vkontakte')}>
        <i className="fab fa-vk text-primary"></i>
      </span>
      <span onClick={() => getOAuthLink('github')}>
        <i className="fab fa-github text-primary"></i>
      </span>
    </div>
  );
}

function mapStateToProps(state) {
  return { oauth: state.oauth };
}

const mapDispatchToProps = { oauthAction: oauth };

export default connect(mapStateToProps, mapDispatchToProps)(SocialButtons);
