---
posted: 2026-04-30
---

I'm pretty new to Postgres, I've historically been vitess guy (thanks to [PlanetScale](https://planetscale.com)).
RLS is a feature in Postgres that lets you bring your security model into the Database.

I got to write about why I generally think that's a bad practice, or at least why its far more complicated than most people expect.
RLS can be implemented well, but the argument for / against RLS feels very similar to that of OOP vs functional programming.

Sure if you do OOP "correctly" its great, but when you start going down the rabbit hole of what that entails, you find yourself in a mess of spaghetti objects and relations.

My full thoughts are in my blog on PlanetScale: [rls sounds great until it isnt](https://planetscale.com/blog/rls-sounds-great-until-it-isnt).

