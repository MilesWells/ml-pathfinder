import { atomWithStorage } from 'jotai/utils';
import { withImmer } from 'jotai-immer';

type ImmerStorageAtomOptions<T> = Parameters<typeof atomWithStorage<T>>;

export function immerStorageAtom<T>([key, initialValue]: ImmerStorageAtomOptions<T>) {
	const storageAtom = atomWithStorage<T>(key, initialValue, undefined, { getOnInit: true });

	return withImmer(storageAtom);
}
