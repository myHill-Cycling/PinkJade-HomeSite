import {
	generate,
	getCacheDirFromMetaUrl
} from "@myhill-cycling/pinkjade-configuration/lint-staged";
export default generate(getCacheDirFromMetaUrl(import.meta.url));
