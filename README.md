# Dynamic Charts Project

The "Dynamic Charts Project" focuses on researching dynamic data visualization using charts based on user input. The output is a Next.js web app that allows users to input data, such as X and Y axes, and choose the type of chart (e.g., bar, pie, etc.) to visually represent the data.

> **Note**: There is still a bug related to adjusting all the charts within each framework or library.

## Currently Implemented Charts

1. [Shadcn Charts](https://ui.shadcn.com/charts)
2. [Apex Charts](https://apexcharts.com/react-chart-demos/)

## Potential Chart Additions

1. [MUI X Charts](https://mui.com/x/react-charts/)
2. [Recharts](https://recharts.org/en-US/examples)
3. [React Charts.js 2](https://react-chartjs-2.js.org/examples)
4. [React Google Charts](https://www.react-google-charts.com/examples/)
5. [Victory](https://commerce.nearform.com/open-source/victory/docs/introduction)

## Getting Started

### 1. Clone this repo using one of the two ways:

Using bash or other terminal

```
git clone https://github.com/dzaky-pr/dynamic-charts-project.git
```

### 2. Install dependencies

It is encouraged to use **pnpm** so the husky hooks can work properly.

```bash
pnpm install
```

### 3. Run the development server

You can start the server using this command:

```bash
pnpm dev
```

## Format Commit Message

This template uses the conventional commit specification for better readability and clarity. It is mandatory to use conventional commit messages. Read more about conventional commits [here](https://www.conventionalcommits.org/en/v1.0.0/).

### 1. Structure

`<type>(optional scope): <description>`
Example: `feat(pre-event): add speakers section`

### 2. Type

Available types are:

- feat → Changes about addition or removal of a feature. Ex: `feat: add table on landing page`, `feat: remove table from landing page`
- fix → Bug fixing, followed by the bug. Ex: `fix: illustration overflows in mobile view`
- docs → Update documentation (README.md)
- style → Updating style, and not changing any logic in the code (reorder imports, fix whitespace, remove comments)
- chore → Installing new dependencies, or bumping deps
- refactor → Changes in code, same output, but different approach
- ci → Update github workflows, husky
- test → Update testing suite, cypress files
- revert → when reverting commits
- perf → Fixing something regarding performance (deriving state, using memo, callback)
- vercel → Blank commit to trigger vercel deployment. Ex: `vercel: trigger deployment`

### 3. Optional Scope

Labels per page Ex: `feat(pre-event): add date label`

\*If there is no scope needed, you don't need to write it

### 4. Description

Description must fully explain what is being done.

Add BREAKING CHANGE in the description if there is a significant change.

**If there are multiple changes, then commit one by one**

- After colon, there are a single space Ex: `feat: add something`
- When using `fix` type, state the issue Ex: `fix: file size limiter not working`
- Use imperative, and present tense: "change" not "changed" or "changes"
- Don't use capitals in front of the sentence
- Don't add full stop (.) at the end of the sentence

## References

This project is built using the boilerplate starter template from the following repository:

- [next-template](https://github.com/tapeds/next-template)
