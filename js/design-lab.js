/* Small, progressively enhanced previews for the design case studies. */
(() => {
  'use strict';

  const demo = document.querySelector('[data-melo-demo]');
  if (demo) {
    const states = {
      startup: ['Starting up', 'When the user opens the agent, Melo gets up, shakes out, and settles into a seated pose. A one-time arrival begins the session.', 'Melo gets up and settles into a seated pose'],
      thinking: ['Thinking', 'The agent is considering the user’s input. A measured head tilt gives thinking its own expression before the task begins.', 'Melo tilts its head while thinking'],
      working: ['Working', 'The agent is carrying out a task. Headphones and typing make active work distinct from thinking or waiting.', 'Melo wears headphones and types at a laptop'],
      attention: ['Needs your input', 'The agent needs permission or has a question. A gentle paw tap asks the user to respond before the agent continues.', 'Melo raises a front paw to ask for attention'],
      idle_rest: ['Resting', 'The agent is open, with no task underway. Quiet breathing gives Melo a calm, familiar presence while the agent waits for the next task.', 'Melo rests with eyes closed'],
      idle_play: ['Playing', 'A second expression of idle time: Melo plays with a toy. The agent is still available, with no task running—just a little companionship.', 'Melo plays with a rope toy']
    };
    const image = document.getElementById('melo-avatar');
    const title = document.getElementById('melo-state-title');
    const description = document.getElementById('melo-state-description');
    const motion = document.getElementById('melo-motion');
    const controls = demo.querySelector('.state-controls');
    const media = window.matchMedia('(prefers-reduced-motion: reduce)');
    const base = '../img/design/melo/';
    let current = 'working';
    let playing = !media.matches;
    let visible = !('IntersectionObserver' in window);
    let generation = 0;

    function render() {
      const token = ++generation;
      const key = current;
      const animate = playing && visible && !document.hidden;
      const still = base + key + '-still.webp';
      title.textContent = states[key][0];
      description.textContent = states[key][1];
      image.alt = states[key][2];
      image.src = still;
      motion.textContent = playing ? 'Turn motion off' : 'Turn motion on';
      motion.setAttribute('aria-pressed', String(playing));
      controls.querySelectorAll('button').forEach(button => {
        button.setAttribute('aria-pressed', String(button.dataset.meloState === key));
      });
      if (!animate) return;
      const animation = new Image();
      animation.onload = () => {
        if (token === generation) image.src = animation.src;
      };
      animation.onerror = () => {
        if (token === generation) description.textContent = states[key][1] + ' Animation unavailable; showing the still pose.';
      };
      animation.src = base + key + '.png';
    }

    controls.hidden = false;
    motion.hidden = false;
    controls.querySelectorAll('button').forEach(button => {
      button.addEventListener('click', () => {
        if (current === button.dataset.meloState) return;
        current = button.dataset.meloState;
        render();
      });
    });
    motion.addEventListener('click', () => { playing = !playing; render(); });
    media.addEventListener('change', event => { playing = !event.matches; render(); });
    document.addEventListener('visibilitychange', render);
    if ('IntersectionObserver' in window) {
      new IntersectionObserver(entries => {
        const next = entries[0].isIntersecting;
        if (next !== visible) { visible = next; render(); }
      }, {threshold: 0.05}).observe(demo);
    }
    render();
  }

  const walkthrough = document.querySelector('[data-uber-walkthrough]');
  if (walkthrough) {
    const chapters = [
      ['Start with the situation.', 'An ongoing order gives help a useful starting point. A separate path lets customers explain a different issue in their own words.'],
      ['Make the next step clear.', 'Action labels say what happens next. The customer can contact a courier, review cancellation, or describe an issue the menu does not cover.'],
      ['Review before confirming.', 'A cancellation summary explains consequences before the customer commits. Keeping the order remains a visible alternative.'],
      ['Keep the context.', 'A handoff carries the order, the customer’s own explanation, and actions already taken. A distinct human identity makes the change in support clear.'],
      ['End with reassurance.', 'The ending confirms resolution and invites optional feedback. It avoids ranking the customer or distracting from the outcome with a performance scorecard.']
    ];
    walkthrough.querySelector('.walkthrough-controls').hidden = false;
    const buttons = walkthrough.querySelectorAll('[data-support-step]');
    buttons.forEach(button => button.addEventListener('click', () => {
      const step = Number(button.dataset.supportStep);
      buttons.forEach(item => item.setAttribute('aria-pressed', String(item === button)));
      walkthrough.querySelectorAll('[data-support-scene]').forEach(scene => {
        scene.hidden = Number(scene.dataset.supportScene) !== step;
      });
      document.getElementById('support-title').textContent = chapters[step][0];
      document.getElementById('support-description').textContent = chapters[step][1];
      document.getElementById('support-identity').textContent = step === 3 ? 'Jamie · Human support' : 'AI assistant · Concept';
      document.getElementById('support-human-label').textContent = step === 3 ? 'Connected to a person' : 'Request human agent';
      walkthrough.querySelector('.phone-head img').src = step === 3 ? '../img/design/uber/person.svg' : '../img/design/uber/profile.webp';
    }));
  }
})();
