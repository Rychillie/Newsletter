import React from "react"

import Layout from "../components/Layout"
import SEO from "../components/seo"
import Header from "../components/Header"

import * as S from "../styles/Home"

const IndexPage = () => (
  <Layout>
    <SEO title="Newsletter" />

    <Header />

    <S.Main>
      <script src="https://f.convertkit.com/ckjs/ck.5.js" />

      <form
        action="https://app.convertkit.com/forms/1801443/subscriptions"
        method="post"
        data-sv-form="1801443"
        data-uid="63ff27f823"
        data-format="inline"
        data-version="5"
        data-options='{"settings":{"after_subscribe":{"action":"message","success_message":"Success! Now check your email to confirm your subscription.","redirect_url":""},"analytics":{"google":null,"facebook":null,"segment":null,"pinterest":null},"modal":{"trigger":"timer","scroll_percentage":null,"timer":5,"devices":"all","show_once_every":15},"powered_by":{"show":true,"url":"https://convertkit.com?utm_source=dynamic&amp;utm_medium=referral&amp;utm_campaign=poweredby&amp;utm_content=form"},"recaptcha":{"enabled":false},"return_visitor":{"action":"show","custom_content":""},"slide_in":{"display_in":"bottom_right","trigger":"timer","scroll_percentage":null,"timer":5,"devices":"all","show_once_every":15},"sticky_bar":{"display_in":"top","trigger":"timer","scroll_percentage":null,"timer":5,"devices":"all","show_once_every":15}},"version":"5"}'
        min-width="400 500 600 700 800"
      >
        <input
          aria-label="Primeiro nome"
          name="fields[first_name]"
          required=""
          placeholder="Primeiro nome"
          type="text"
        />
        <input
          name="email_address"
          aria-label="Endereço de e-mail"
          placeholder="Endereço de e-mail"
          required=""
          type="email"
        />
        <button data-element="submit">
          <span>INSCREVA-SE</span>
        </button>
        <p>Você pode se desinscrever a qualquer momento.</p>
      </form>
    </S.Main>
  </Layout>
)

export default IndexPage
