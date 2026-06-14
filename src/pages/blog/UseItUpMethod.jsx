import { Link } from 'react-router-dom'
import { getPost } from '../../content/blog'
import BlogPostLayout from './BlogPostLayout'

export default function UseItUpMethod() {
  return (
    <BlogPostLayout post={getPost('use-it-up-method')}>
      <p className="lead">
        The use-it-up method is meal planning in reverse: instead of choosing recipes and shopping
        for them, you start with what’s already in your kitchen and what’s about to expire, then
        plan meals around that — only buying what you’re genuinely missing. It wastes less, costs
        less, and takes less effort than a traditional recipe-first plan.
      </p>

      <h2>Why recipe-first planning quietly wastes food</h2>
      <p>
        The usual approach — browse recipes, write a shopping list, buy everything — ignores what
        you already own. So you buy a second jar of cumin, the half-bag of spinach in the drawer
        goes off, and last night’s leftovers get pushed to the back of the fridge. The plan looked
        tidy; the bin tells a different story.
      </p>

      <h2>The method, in four steps</h2>
      <ol>
        <li><strong>Take stock.</strong> Note what you have and, crucially, what’s about to expire.</li>
        <li><strong>Cook the expiring stuff first.</strong> Build this week’s meals around those items.</li>
        <li><strong>Fill the gaps.</strong> Add a few flexible meals, then list only the ingredients you don’t already have.</li>
        <li><strong>Keep it current.</strong> As you cook, update what’s left so next week starts from reality.</li>
      </ol>

      <h2>Making it effortless</h2>
      <p>
        The method works on paper, but it’s tedious by hand — which is why most people give up. The
        whole point of Copantry is to automate it: it keeps your pantry up to date, surfaces what’s
        expiring, suggests meals around it, and turns the gaps into a shopping list. See{' '}
        <Link to="/how-it-works">how it works</Link>, or why this beats a{' '}
        <Link to="/why-copantry">calendar-first planner or a recipe box</Link>.
      </p>

      <p>
        Start small: this week, before you shop, open the fridge and plan one dinner around the
        thing most likely to be binned. That single habit is the use-it-up method in miniature —
        and it adds up fast. Related: <Link to="/blog/what-can-i-cook-with-what-i-have">what can I cook with what I have?</Link>
      </p>
    </BlogPostLayout>
  )
}
