import { SettingsState } from '../types/settings'

export const DEFAULT_SETTINGS: SettingsState = {
  // General
  nativeScrollbars: true,
  nativeScrollbarsThin: true,
  nativeScrollbarsLeft: false,
  selWinScreenshots: false,
  updateSidebarTitle: true,
  markWindow: false,
  markWindowPreface: '[Sidebery] ',

  // Context menu
  ctxMenuNative: false,
  ctxMenuRenderInact: true,
  ctxMenuRenderIcons: true,
  ctxMenuIgnoreContainers: '',

  // Nav bar
  navBarLayout: 'horizontal',
  navBarInline: true,
  navBarSide: 'left',
  hideAddBtn: false,
  hideSettingsBtn: false,
  navBtnCount: true,
  hideEmptyPanels: true,
  hideDiscardedTabPanels: false,
  navActTabsPanelLeftClickAction: 'none',
  navActBookmarksPanelLeftClickAction: 'none',
  navTabsPanelMidClickAction: 'discard',
  navBookmarksPanelMidClickAction: 'none',
  navSwitchPanelsWheel: true,
  subPanelRecentlyClosedBar: true,
  subPanelBookmarks: true,
  subPanelHistory: true,
  subPanelSync: false,

  // Group page
  groupLayout: 'grid',

  // Containers
  containersSortByName: false,

  // Panels
  skipEmptyPanels: false,

  // Drag and drop
  dndTabAct: true,
  dndTabActDelay: 750,
  dndTabActMod: 'none',
  dndExp: 'pointer',
  dndExpDelay: 750,
  dndExpMod: 'none',
  dndOutside: 'win',
  dndActTabFromLink: true,
  dndActSearchTab: true,
  dndMoveTabs: false,
  dndMoveBookmarks: false,

  // Search
  searchBarMode: 'dynamic',
  searchPanelSwitch: 'same_type',
  searchBookmarksShortcut: '',
  searchHistoryShortcut: '',

  // Tabs
  warnOnMultiTabClose: 'collapsed',
  activateLastTabOnPanelSwitching: true,
  activateLastTabOnPanelSwitchingLoadedOnly: true,
  switchPanelAfterSwitchingTab: 'always',
  tabRmBtn: 'hover',
  activateAfterClosing: 'next',
  activateAfterClosingStayInPanel: false,
  activateAfterClosingGlobal: false,
  activateAfterClosingNoFolded: true,
  activateAfterClosingNoDiscarded: true,
  askNewBookmarkPlace: true,
  tabsRmUndoNote: true,
  tabsUnreadMark: false,
  tabsUpdateMark: 'all',
  tabsUpdateMarkFirst: true,
  tabsReloadLimit: 5,
  tabsReloadLimitNotif: true,
  showNewTabBtns: true,
  newTabBarPosition: 'after_tabs',
  tabsPanelSwitchActMove: false,
  tabsPanelSwitchActMoveAuto: true,
  tabsUrlInTooltip: 'full',
  newTabCtxReopen: false,
  tabWarmupOnHover: true,
  tabSwitchDelay: 0,
  forceDiscard: true,

  // New tab position
  moveNewTabPin: 'start',
  moveNewTabParent: 'last_child',
  moveNewTabParentActPanel: false,
  moveNewTab: 'end',
  moveNewTabActivePin: 'start',

  // Pinned tabs
  pinnedTabsPosition: 'panel',
  pinnedTabsList: false,
  pinnedAutoGroup: false,
  pinnedNoUnload: false,
  pinnedForcedDiscard: false,

  // Tabs tree
  tabsTree: true,
  groupOnOpen: true,
  tabsTreeLimit: 'none',
  autoFoldTabs: false,
  autoFoldTabsExcept: 'none',
  autoExpandTabs: false,
  autoExpandTabsOnNew: false,
  rmChildTabs: 'folded',
  tabsLvlDots: true,
  discardFolded: false,
  discardFoldedDelay: 0,
  discardFoldedDelayUnit: 'sec',
  tabsTreeBookmarks: true,
  treeRmOutdent: 'branch',
  autoGroupOnClose: false,
  autoGroupOnClose0Lvl: false,
  autoGroupOnCloseMouseOnly: false,
  ignoreFoldedParent: false,
  showNewGroupConf: true,
  sortGroupsFirst: true,

  // Tabs colorization
  colorizeTabs: false,
  colorizeTabsSrc: 'domain',
  colorizeTabsBranches: false,
  colorizeTabsBranchesSrc: 'url',
  inheritCustomColor: true,

  // Tabs preview
  previewTabs: false,
  previewTabsMode: 'i',
  previewTabsPageModeFallback: 'w',
  previewTabsInlineHeight: 70,
  previewTabsPopupWidth: 280,
  previewTabsTitle: 2,
  previewTabsUrl: 1,
  previewTabsSide: 'right',
  previewTabsDelay: 500,
  previewTabsFollowMouse: true,
  previewTabsWinOffsetY: 36,
  previewTabsWinOffsetX: 6,
  previewTabsInPageOffsetY: 0,
  previewTabsInPageOffsetX: 0,
  previewTabsCropRight: 0,

  // Native tabs
  hideInact: false,
  hideFoldedTabs: false,
  hideFoldedParent: 'none',
  nativeHighlight: true,

  // Bookmarks
  warnOnMultiBookmarkDelete: 'collapsed',
  autoCloseBookmarks: false,
  autoRemoveOther: false,
  highlightOpenBookmarks: false,
  activateOpenBookmarkTab: false,
  showBookmarkLen: true,
  bookmarksRmUndoNote: true,
  loadBookmarksOnDemand: true,
  pinOpenedBookmarksFolder: true,
  oldBookmarksAfterSave: 'ask',

  // History
  loadHistoryOnDemand: true,

  // Appearance
  fontSize: 'm',
  animations: true,
  animationSpeed: 'norm',
  theme: 'proton',
  density: 'default',
  colorScheme: 'ff',

  // Snapshots
  snapNotify: true,
  snapExcludePrivate: false,
  snapInterval: 0,
  snapIntervalUnit: 'min',
  snapLimit: 0,
  snapLimitUnit: 'snap',
  snapAutoExport: false,
  snapAutoExportType: 'json',
  snapAutoExportPath: 'Sidebery/snapshot-%Y.%M.%D-%h.%m.%s',
  snapMdFullTree: false,

  // Mouse
  hScrollAction: 'none',
  onePanelSwitchPerScroll: false,
  wheelAccumulationX: true,
  wheelAccumulationY: true,
  navSwitchPanelsDelay: 128,
  scrollThroughTabs: 'none',
  scrollThroughVisibleTabs: true,
  scrollThroughTabsSkipDiscarded: true,
  scrollThroughTabsExceptOverflow: true,
  scrollThroughTabsCyclic: false,
  scrollThroughTabsScrollArea: 0,
  autoMenuMultiSel: true,
  multipleMiddleClose: false,
  longClickDelay: 500,
  wheelThreshold: false,
  wheelThresholdX: 10,
  wheelThresholdY: 60,
  tabDoubleClick: 'none',
  tabsSecondClickActPrev: false,
  tabsSecondClickActPrevPanelOnly: false,
  tabsSecondClickActPrevNoUnload: false,
  shiftSelAct: true,
  activateOnMouseUp: false,
  tabLongLeftClick: 'none',
  tabLongRightClick: 'none',
  tabMiddleClick: 'close',
  tabPinnedMiddleClick: 'discard',
  tabMiddleClickCtrl: 'discard',
  tabMiddleClickShift: 'duplicate',
  tabCloseMiddleClick: 'close',
  tabsPanelLeftClickAction: 'none',
  tabsPanelDoubleClickAction: 'tab',
  tabsPanelRightClickAction: 'menu',
  tabsPanelMiddleClickAction: 'tab',
  newTabMiddleClickAction: 'new_child',
  bookmarksLeftClickAction: 'open_in_act',
  bookmarksLeftClickActivate: false,
  bookmarksLeftClickPos: 'default',
  bookmarksMidClickAction: 'open_in_new',
  bookmarksMidClickActivate: false,
  bookmarksMidClickRemove: false,
  bookmarksMidClickPos: 'default',
  historyLeftClickAction: 'open_in_act',
  historyLeftClickActivate: false,
  historyLeftClickPos: 'default',
  historyMidClickAction: 'open_in_new',
  historyMidClickActivate: false,
  historyMidClickPos: 'default',

  // Sync
  syncName: '',
  syncUseFirefox: true,
  syncUseGoogleDrive: false,
  syncUseGoogleDriveApi: false,
  syncUseGoogleDriveApiClientId: '',
  syncSaveSettings: false,
  syncSaveCtxMenu: false,
  syncSaveStyles: false,
  syncSaveKeybindings: false,

  // Keybindings
  selectActiveTabFirst: true,
}

// prettier-ignore
export const SETTINGS_OPTIONS = {
  navActTabsPanelLeftClickAction: ['scroll', 'new_tab', 'none'],
  navActBookmarksPanelLeftClickAction: ['scroll', 'none'],
  navTabsPanelMidClickAction: [
    'rm_act_tab', 'rm_all', 'rm_rmp', 'discard', 'hide', 'bookmark', 'bkm_rmp', 'convert',
    'conv_hide', 'none'
  ],
  navBookmarksPanelMidClickAction: ['convert', 'none'],
  tabsUrlInTooltip: ['full', 'stripped', 'none'],
  groupLayout: ['grid', 'list'],
  hScrollAction: ['switch_panels', 'switch_act_tabs', 'none'],
  scrollThroughTabs: ['panel', 'global', 'psp', 'psg', 'none'],
  discardFoldedDelayUnit: ['sec', 'min'],
  tabDoubleClick: ['reload', 'duplicate', 'dup_child', 'pin', 'mute', 'clear_cookies', 'exp',
    'new_after', 'new_child', 'close', 'edit_title', 'none'],
  tabLongLeftClick: ['reload', 'duplicate', 'dup_child', 'pin', 'mute', 'clear_cookies', 'new_after',
    'new_child', 'edit_title', 'none'],
  tabLongRightClick: ['reload', 'duplicate', 'dup_child', 'pin', 'mute', 'clear_cookies', 'new_after',
    'new_child', 'edit_title', 'none'],
  tabMiddleClick: ['close', 'discard', 'discard_or_close', 'duplicate', 'dup_child', 'none'],
  tabPinnedMiddleClick: ['close', 'discard', 'discard_or_close', 'duplicate', 'unpin', 'none'],
  tabMiddleClickModifier: ['discard', 'discard_or_close', 'duplicate', 'dup_child', 'edit_title', 'none'],
  tabCloseMiddleClick: ['close', 'discard', 'discard_or_close'],
  tabsPanelLeftClickAction: ['prev', 'expand', 'parent', 'tab', 'none'],
  tabsPanelDoubleClickAction: ['collapse', 'tab', 'undo', 'none'],
  tabsPanelRightClickAction: ['next', 'expand', 'parent', 'menu', 'none'],
  tabsPanelMiddleClickAction: ['rm_act_tab', 'tab', 'undo', 'none'],
  newTabAction: ['new_child', 'reopen'],
  bookmarksLeftClickAction: ['open_in_act', 'open_in_new'],
  bookmarksNewTabPos: ['default', 'after'],
  bookmarksMidClickAction: ['open_in_new', 'edit', 'delete'],
  historyLeftClickAction: ['open_in_act', 'open_in_new'],
  historyNewTabPos: ['default', 'after'],
  historyMidClickAction: ['open_in_new', 'forget_visit'],
  tabRmBtn: ['always', 'hover', 'none'],
  activateAfterClosing: ['prev_act', 'next', 'prev', 'none'],
  tabsUpdateMark: ['all', 'pin', 'norm', 'none'],
  pinnedTabsPosition: ['panel', 'top', 'left', 'right'],
  tabsTreeLimit: [1, 2, 3, 4, 5, 'none'],
  previewTabsMode: ['i', 'p', 'w'],
  previewTabsPageModeFallback: ['i', 'w', 'n'],
  previewTabsSide: ['right', 'left'],
  hideFoldedParent: ['any', 'group', 'none'],
  rmChildTabs: ['all', 'folded', 'none'],
  fontSize: ['xxs', 'xs', 's', 'm', 'l', 'xl', 'xxl'],
  theme: ['proton', 'plain'],
  density: ['compact', 'default', 'loose'],
  colorScheme: ['dark', 'light', 'sys', 'ff'],
  snapIntervalUnit: ['min', 'hr', 'day'],
  snapAutoExportType: ['json', 'md', 'both'],
  snapLimitUnit: ['snap', 'kb', 'day'],
  moveNewTabPin: ['start', 'end'],
  moveNewTabParent: [
    'before', 'sibling', 'first_child', 'last_child', 'start', 'end', 'default', 'none'
  ],
  moveNewTab: ['start', 'end', 'before', 'after', 'first_child', 'last_child', 'none'],
  moveNewTabActivePin: ['start', 'end'],
  warnOnMultiTabClose: ['any', 'collapsed', 'none'],
  warnOnMultiBookmarkDelete: ['any', 'collapsed', 'none'],
  navBarLayout: ['horizontal', 'vertical', 'hidden'],
  navBarSide: ['left', 'right'],
  navBarHorLayout: ['inline', 'wrap'],
  navBarVertLayout: ['left', 'right'],
  autoFoldTabsExcept: [1, 2, 3, 4, 5, 'none'],
  dndTabActMod: ['alt', 'shift', 'ctrl', 'none'],
  dndExp: ['pointer', 'hover', 'none'],
  dndExpMod: ['alt', 'shift', 'ctrl', 'none'],
  dndOutside: ['win', 'data'],
  animationSpeed: ['fast', 'norm', 'slow'],
  treeRmOutdent: ['branch', 'first_child'],
  colorizeTabsSrc: ['domain', 'container'],
  colorizeTabsBranchesSrc: ['url', 'domain'],
  searchBarMode: ['static', 'dynamic', 'none'],
  searchPanelSwitch: ['any', 'same_type', 'none'],
  newTabBarPosition: ['after_tabs', 'bottom'],
  oldBookmarksAfterSave: ['ask', 'del', 'keep'],
  switchPanelAfterSwitchingTab: ['always', 'mouseleave', 'no'],
} as const
