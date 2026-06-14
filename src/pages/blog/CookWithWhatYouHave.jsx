import { Link } from 'react-router-dom'
import { getPost } from '../../content/blog'
import BlogPostLayout from './BlogPostLayout'

export default function CookWithWhatYouHave() {
  return (
    <BlogPostLayout post={getPost('what-can-i-cook-with-what-i-have')}>
      <p className="lead">
        To cook with what you already have, start from your fridge instead of a recipe: pick the two
        or three things that need using up first, choose a method (a traybake, a stir-fry, a soup, a
        pasta, an omelette), and build around them with storecupboard staples. You almost always
        have a meal already — you just can’t see it yet.
      </p>

      <h2>1. Look at what’s about to go off, not what’s missing</h2>
      <p>
        The trick is to flip the question. Instead of “what do I need to buy to make this recipe?”,
        ask “what do I already have that I should use first?”. Wilting spinach, a couple of chicken
        thighs and a lemon aren’t leftovers — they’re a lemon-and-spinach chicken traybake.
      </p>

      <h2>2. Pick a format, then fill it in</h2>
      <p>Most weeknight dinners are one of a handful of flexible formats:</p>
      <ul>
        <li><strong>Traybake:</strong> a protein + hardy veg + oil + seasoning, roasted together.</li>
        <li><strong>Stir-fry:</strong> anything crunchy + a protein + a sauce, over rice or noodles.</li>
        <li><strong>Soup:</strong> an onion base + whatever veg is tired + stock, blended or not.</li>
        <li><strong>Pasta:</strong> a sauce built from a tin of tomatoes or some cream + bits and bobs.</li>
        <li><strong>Frittata or omelette:</strong> eggs + cheese + any leftover veg or herbs.</li>
      </ul>
      <p>
        Choose the format that matches your ingredients and the time you have, and the “recipe”
        mostly writes itself.
      </p>

      <h2>3. Let the app do the matching</h2>
      <p>
        This is exactly what Copantry is built to do. It already knows what’s in your kitchen and
        how long each thing has left, so it can suggest real meals that use your about-to-expire
        ingredients first — scaled to however many you’re feeding. See{' '}
        <Link to="/features/reduce-food-waste">how it reduces food waste</Link> and{' '}
        <Link to="/features/meal-planning">how meal planning works</Link>.
      </p>

      <p>
        Cooking from what you have is the single most effective everyday habit for wasting less and
        spending less — and it’s usually faster than going to the shop. For the bigger picture, see{' '}
        <Link to="/blog/use-it-up-method">the use-it-up method</Link>.
      </p>
    </BlogPostLayout>
  )
}
