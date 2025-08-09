export const useImageMapper = () => {
    let manifest = null;

    const loadManifest = async () => {
        if (!manifest) {
            try {
                const res = await fetch("/asset-manifest.json");
                if (res.ok) {
                    manifest = await res.json();
                } else {
                    manifest = { mapping: {} };
                }
            } catch (e) {
                console.error("❌ manifest 로드 실패:", e);
                manifest = { mapping: {} };
            }
        }
        return manifest.mapping || {};
    };

    const mapImagePath = async (originalPath) => {
        const mapping = await loadManifest();
        return mapping[originalPath] || originalPath;
    };

    return { mapImagePath, loadManifest };
};
