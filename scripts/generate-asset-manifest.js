import fs from "fs";
import path from "path";
import crypto from "crypto";

const publicDir = path.resolve(process.cwd(), "public");
const imagesDir = path.join(publicDir, "layout", "images");
const manifestPath = path.join(publicDir, "asset-manifest.json");

function hashFile(filePath) {
  const buffer = fs.readFileSync(filePath);
  return crypto.createHash("md5").update(buffer).digest("hex").slice(0, 8);
}

function walk(dir) {
  let results = [];
  fs.readdirSync(dir).forEach((file) => {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      results = results.concat(walk(fullPath));
    } else {
      results.push(fullPath);
    }
  });
  return results;
}

function generateManifest() {
  if (!fs.existsSync(imagesDir)) {
    console.warn(`⚠️ 이미지 폴더가 없습니다: ${imagesDir}`);
    return;
  }
  const targetFolders = ["work"];
  const hashPattern = /\.[a-f0-9]{8}\./;


  const allFiles = walk(imagesDir);

  allFiles.forEach(file => {
    const relativeToImages = path.relative(imagesDir, file).replace(/\\/g, "/");
    const firstFolder = relativeToImages.split("/")[0];
    const fileName = path.basename(file);

    if (targetFolders.includes(firstFolder) && hashPattern.test(fileName)) {
      fs.unlinkSync(file);
      console.log(`🗑️ 삭제됨: ${file}`);
    }
  });

  const filteredFiles = allFiles.filter(file => {
    const relativeToImages = path.relative(imagesDir, file).replace(/\\/g, "/");
    const firstFolder = relativeToImages.split("/")[0];
    const fileName = path.basename(file);

    return targetFolders.includes(firstFolder) && !hashPattern.test(fileName);
  });

  const mapping = {};


  filteredFiles.forEach((file) => {
    const relPath = path.relative(publicDir, file).replace(/\\/g, "/");
    const ext = path.extname(file);
    const baseName = path.basename(file, ext);
    const hash = hashFile(file);
    const dirName = path.dirname(file);

    const newFileName = `${baseName}.${hash}${ext}`;
    const newFilePath = path.join(dirName, newFileName);

    fs.copyFileSync(file, newFilePath);

    mapping[`/${relPath}`] = `/${path.relative(publicDir, newFilePath).replace(/\\/g, "/")}`;
  });

  const manifest = {
    generatedAt: new Date().toISOString(),
    mapping,
  };

  fs.writeFileSync(manifestPath, JSON.stringify(manifest, null, 2), "utf8");
  console.log(`✅ asset-manifest.json 생성 완료 (${Object.keys(mapping).length}개 파일)`);
}

generateManifest();