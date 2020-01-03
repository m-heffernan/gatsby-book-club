const React = require("react")
const Layout = require("./src/components/layout").default

exports.wrapPageEleement = ({ element, props }) => {
  return <Layout {...props}>{element}</Layout>
}
