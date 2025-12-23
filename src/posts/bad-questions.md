---
posted: 2023-10-27
---

> Help, my car wont start!

Imagine your friend comes to you and asks "Why wont my car start?". Could you tell them why?
If not, why couldn't you? Obviously, since you also drive cars, you should be able to tell
him what is wrong with his.

Assuming someone has linked you this article, you are the friend asking why their car wont
start. Without context to the problem at hand, no one can efficiently give you a solution
to your problem. You have asked a bad question. It's okay, everyone asks bad questions sometimes,
so lets try and make it better.

> I drive a Toyota.

Good for you! Now we know a tiny bit more, but we still have no idea what could be wrong with your car.
When you ask a question, give as much detail as possible. When someone asks for context, 5 lines of code
are almost never enough. If you are able to link the entire repository then by all means, do that.
If you can't, make sure to include all the files that could possibly affect the question at hand.

Take for example an issue with [tRPC](https://trpc.io). If someone asks "Why doesn't my query work?" and provides
only the client file where they are calling the function, we are still lacking a large amount of context. You
have told us you drive a Toyota, and nothing more.

> It's a 2014 Toyota Camry SE

We are making progress! Your goal in asking the question in the first place is to get help. If you are asking
strangers on the internet for help, there is extremely little incentive for them to help you. The easier it is
for them to help you, the greater the chance that they will.

Back to our tRPC example, we would give the client component, how it is defined on the server, how the `queryClient`
is defined on the client, and how the `appRouter` itself is setup on the server, along with any more details you
can give. What are your inputs to the query? What errors are you getting back? What is the expected behavior?

> I tried jump-starting the car, but that didn't work

Tell us what you have tried! What worked, what didn't work, and why? What were the results of your tests and
attempts to solving the issue yourself? If you haven't tried anything, why are you asking the question in the
first place? Before you ask, make sure you have exhausted all your other options. If it seems that your too lazy to debug
the issue yourself, why would other people try and help you?

> Well, how do I fix it?

If you do all of the above, you will often find the answer during the process of preparing to ask the
question itself. Asking a proper question should take time, and you should put effort into your questions.
The more effort you put into your questions, the more people will be receptive to helping you answer them.

If you still have not figured out the problem, make sure to work with the people that are offering solutions.
Engage and learn from the people trying to help you.

### TLDR;

To sum all of these points up, here is a little TLDR checklist

- Have you googled for a solution?
- Have you gone to the documentation?
- Have you included **all** of the source code / files that pertain to the problem?
- Have you attached the error?
- Have you described the desired outcome?
- Have you explained what you have tried, and why it didn't work?
- Have you tried turning it off and on again? _(This is only half ironic)_

Shoutout to [dont ask to ask](https://dontasktoask.com) for inspiring me to write this article.
