import app from 'flarum/admin/app';

app.initializers.add('leanzo/discussion-thumbnail', () => {
    app.extensionData.for('fof-discussion-thumbnail').registerSetting({
        label: app.translator.trans('fof-discussion-thumbnail.admin.settings.link_to_discussion_label'),
        setting: 'fof-discussion-thumbnail.link_to_discussion',
        type: 'boolean',
    });
});
