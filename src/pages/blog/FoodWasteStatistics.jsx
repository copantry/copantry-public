import { Link } from 'react-router-dom'
import { getPost } from '../../content/blog'
import BlogPostLayout from './BlogPostLayout'

export default function FoodWasteStatistics() {
  return (
    <BlogPostLayout post={getPost('food-waste-statistics-uk')}>
      <p className="lead">
        According to WRAP, UK households throw away around 6.4 million tonnes of food a year, the
        large majority of which could have been eaten. For an average family with children that
        works out at roughly £1,000 of food binned annually. The good news: most of it is avoidable
        with a few simple habits.
      </p>

      <h2>What the numbers say</h2>
      <p>
        WRAP — the UK’s waste and resources body — is the most-cited source on this. Their household
        food waste research consistently finds that the bulk of what we throw away was once
        perfectly edible, and that it’s a major contributor to household carbon footprints as well
        as a hit to the weekly budget. (Always check the latest figures at{' '}
        <a href="https://wrap.org.uk" target="_blank" rel="noopener noreferrer">wrap.org.uk</a> — they update periodically.)
      </p>

      <h2>The foods we bin most</h2>
      <p>WRAP’s data points repeatedly at the same culprits — fresh, fast-spoiling everyday items:</p>
      <ul>
        <li><strong>Bread</strong> — bought in bulk, dries out and moulds before we finish it.</li>
        <li><strong>Milk and dairy</strong> — opened, forgotten, poured away near the date.</li>
        <li><strong>Fresh vegetables and salad</strong> — wilting bags of leaves are a classic.</li>
        <li><strong>Fresh fruit</strong> — bananas and berries that ripen faster than we eat them.</li>
        <li><strong>Leftovers and home-cooked food</strong> — cooked, chilled, never reheated.</li>
      </ul>
      <p>
        Want to know how long any of these actually keep? See our{' '}
        <Link to="/learn">guides to how long food lasts</Link>.
      </p>

      <h2>Why it happens — and how to stop it</h2>
      <p>
        Almost all household food waste comes down to two things: buying more than we use, and
        losing track of what we already have. The fixes are simple:
      </p>
      <ul>
        <li>Keep an eye on what’s about to expire and cook that first.</li>
        <li>Plan meals around your fridge instead of shopping for new recipes each time.</li>
        <li>Only buy what you don’t already have.</li>
      </ul>
      <p>
        That’s the entire idea behind Copantry. It tracks how long everything in your kitchen has
        left, suggests meals to use it up, and builds a shopping list of only the gaps — see{' '}
        <Link to="/features/reduce-food-waste">reduce food waste</Link> and{' '}
        <Link to="/use-cases/budget-cooking">budget cooking</Link>.
      </p>

      <p className="note">
        Figures attributed to WRAP and intended as a general guide; verify the current statistics at
        the source before relying on them.
      </p>
    </BlogPostLayout>
  )
}
