import { execSync } from "node:child_process";

const ports = [3000, 3001, 3002, 3003, 3004, 3005];
const pids = new Set();

for (const port of ports) {
  try {
    const output = execSync(`netstat -ano | findstr :${port}`, {
      encoding: "utf8",
      stdio: ["ignore", "pipe", "ignore"],
    });

    for (const line of output.split(/\r?\n/)) {
      if (!line.includes("LISTENING")) continue;
      const pid = line.trim().split(/\s+/).at(-1);
      if (pid && pid !== "0") pids.add(pid);
    }
  } catch {
    // No listeners on this port.
  }
}

for (const pid of pids) {
  try {
    execSync(`taskkill /PID ${pid} /F`, { stdio: "ignore" });
    console.log(`Stopped dev server PID ${pid}`);
  } catch {
    // Process may already be gone.
  }
}
