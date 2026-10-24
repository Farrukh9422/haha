// Builds plain HTML files into /out for normal web hosting (works on Windows, Mac and Linux).
const { spawnSync } = require('child_process')

const result = spawnSync('npx', ['next', 'build'], {
    stdio: 'inherit',
    shell: true,
    env: { ...process.env, STATIC_EXPORT: '1' },
})

process.exit(result.status ?? 1)
