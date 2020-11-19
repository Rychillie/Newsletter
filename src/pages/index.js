import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>

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
      <div></div>
      <div data-style="minimal">
        <div data-element="header">
          <h1>Participe da nossa Newsletter</h1>
        </div>
        <div data-element="subheader">
          <p>Inscreva-se e receba contedo semanal gratuito.</p>
        </div>
        <div data-element="fields" data-stacked="true">
          <div>
            <input
              aria-label="Primeiro nome"
              name="fields[first_name]"
              required=""
              placeholder="Primeiro nome"
              type="text"
            />
          </div>
          <div class="formkit-field">
            <input
              name="email_address"
              aria-label="Endereço de e-mail"
              placeholder="Endereço de e-mail"
              required=""
              type="email"
            />
          </div>
          <button data-element="submit">
            <span>INSCREVA-SE</span>
          </button>
        </div>
        <div data-element="guarantee">
          <p>Você pode se desinscrever a qualquer momento.</p>
        </div>
      </div>
    </form>
  </Layout>
)

export default IndexPage
