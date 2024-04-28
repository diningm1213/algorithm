function solution(skill, skill_trees) {
    const regexp = new RegExp(`[${skill}]`, 'g');
    
    skill_trees = skill_trees.map(skill_tree =>
        (skill_tree.match(regexp) || []).join('')
    );
    
    return skill_trees.filter(skill_tree => skill.startsWith(skill_tree)).length;
}