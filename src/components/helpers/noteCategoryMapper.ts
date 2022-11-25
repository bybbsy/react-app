import { NoteCategoryType } from "../../pages/Notes/Notes";

import MoveIcon from '@mui/icons-material/Movie';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';

import { OverridableComponent } from "@mui/material/OverridableComponent";
import { SvgIconTypeMap } from "@mui/material";

const mappedCategories: {[name in NoteCategoryType]: string} = {
  'video': 'видео',
  'music': 'музыка',
  'video-game': 'игры'
}

const mappedIcons: {[name in NoteCategoryType]: OverridableComponent<SvgIconTypeMap<{}, "svg">>} = {
  'video': MoveIcon,
  'music': LibraryMusicIcon,
  'video-game': SportsEsportsIcon
}

export function NoteCategoryMapper(category: NoteCategoryType) {
  return mappedCategories[category];
}

export function NoteCategoryIconMapper(category: NoteCategoryType) {
  return mappedIcons[category];
}
